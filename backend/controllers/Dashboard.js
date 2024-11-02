const User = require('../models/User');
const Company = require('../models/Company');
const Job = require('../models/Job');
const Profile = require('../models/Profile');

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

module.exports = { getDashboardStats };

