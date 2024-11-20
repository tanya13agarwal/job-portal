const User = require('../models/User');
const Company = require('../models/Company');
const Job = require('../models/Job');
const Profile = require('../models/Profile');
const axios = require('axios'); // For communicating with Flask API

const getDashboardStats = async (req, res) => {
  try {
    // Fetch total student and company counts
    const totalStudents = await User.countDocuments({ accountType: 'Student' });
    const totalCompanies = await Company.countDocuments();

    // Fetch the number of students enrolled per year
    const studentData = await User.aggregate([
      { $match: { accountType: 'Student' } },
      { $group: { _id: { $year: '$createdAt' }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    // Fetch job counts by company with at least one job
    const companyJobStats = await Company.aggregate([
      {
        $lookup: {
          from: 'jobs',
          localField: 'jobs',
          foreignField: '_id',
          as: 'jobList'
        }
      },
      { $match: { jobList: { $ne: [] } } }, // Only include companies with at least one job
      {
        $project: {
          _id: 1,
          companyName: 1,
          jobCount: { $size: '$jobList' },
          thumbnail: 1, 
          companyDescription: 1,
          companyLocation: 1,
          companyWebsite: 1
        }
      }
    ]);

      // Updated studentJobEnrollments aggregation
    const studentJobEnrollments = await Profile.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: '$user' },
      { $match: { 'user.accountType': 'Student' } },
      {
        $project: {
          _id: 0,
          studentName: { $concat: ['$user.firstName', ' ', '$user.lastName'] },
          jobCount: { $size: { $ifNull: ['$jobEnrolled', []] } } // Ensure jobEnrolled is an array
        }
      },
      { $sort: { studentName: 1 } }  // Optional: sort by student name
    ]);

    // Fetch student job applications per year
    const studentJobApplicationsPerYear = await Profile.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: '$user' },
      { $match: { 'user.accountType': 'Student' } },
      {
        $project: {
          year: { $year: '$createdAt' },
          jobCount: { $size: { $ifNull: ['$jobEnrolled', []] } } // Ensure jobEnrolled is an array
        }
      },
      {
        $group: {
          _id: '$year',
          totalApplications: { $sum: '$jobCount' }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    
    const studentPlacedPerYear = await Profile.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      { $unwind: '$user' },
      { $match: { 'user.accountType': 'Student', isPlaced: true } },
      {
        $project: {
          year: { $year: '$createdAt' },
          studentName: { $concat: ['$user.firstName', ' ', '$user.lastName'] }
        }
      },
      {
        $group: {
          _id: '$year',
          totalPlaced: { $sum: 1 },
          placedStudents: { $push: '$studentName' } // Collecting placed students' names in an array
        }
      },
      { $sort: { _id: 1 } }
    ]);    

    // Send the aggregated response
    res.status(200).json({
      success: true,
      data: {
        studentData,
        companyData: companyJobStats,
        totalStudents,
        totalCompanies,
        studentJobEnrollments,
        studentJobApplicationsPerYear,
        studentPlacedPerYear
      }
    });

  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


// Backend Route to Calculate Average Package for Multiple Years
const averageSalaryStats =  async (req, res) => {
    try {
        // const currentYear = new Date().getFullYear();
        // const years = Array.from({ length: 5 }, (_, i) => currentYear - i); // Last 5 years
        const startYear = 2023;
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);


        const averagePackages = await Promise.all(years.map(async (year) => {
            const jobs = await Job.find({
                status: "Published",
                createdAt: {
                    $gte: new Date(`${year}-01-01`),
                    $lte: new Date(`${year}-12-31`)
                }
            });

            if (jobs.length === 0) {
                return { year, averagePackage: 0 };
            }

            const totalPackage = jobs.reduce((sum, job) => sum + (job.minSalary + job.maxSalary) / 2, 0);
            const averagePackage = totalPackage / jobs.length;

            return { year, averagePackage };
        }));

        res.json(averagePackages.reverse()); // Return in ascending order of years
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Predict Placement Percentage
const predictPlacement = async (req, res) => {
  const { score, timeTaken } = req.body; // Adjust to extract both score and timeTaken
  console.log("bd:scoreeeee:", score);
  console.log("bd:time:", timeTaken);
  if (score === undefined || timeTaken === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: score and timeTaken.',
    });
  }

  try {
    // Send the request to the Flask API
    const response = await axios.post(`${process.env.PYTHON_BACKEND_URL}/dashboard/predict`, {
      score,
      time_taken: timeTaken, // API expects "time_taken" field
    });

    console.log("Response from Flask API:", response.data);

    // Extract the predicted placement percentage
    const placementPercentage = response.data.predicted_placement_percentage;

    // Respond with the prediction
    res.status(200).json({
      success: true,
      placementPercentage,
    });
  } catch (error) {
    console.error('Error predicting placement:', error);

    // Handle errors appropriately
    const errorMessage = error.response?.data?.details || 'Failed to predict placement percentage.';
    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = {
  getDashboardStats,
  averageSalaryStats,
  predictPlacement,
};


