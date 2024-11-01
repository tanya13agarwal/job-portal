const User = require('../models/User');
const Company = require('../models/Company');
const Job = require('../models/Job');
const Profile = require('../models/Profile');

// // exports.getDashboardStats = async (req, res) => {
// //   try {
// //     // Get the current year to limit results up to the present time
// //     const currentYear = new Date().getFullYear();
    
// //     // 1. Fetch student enrollment data, grouped by the year of account creation
// //     const studentEnrollments = await User.aggregate([
// //       {
// //         $match: {
// //           accountType: "Student",
// //           createdAt: { $exists: true } // Ensure `createdAt` exists
// //         }
// //       },
// //       {
// //         $group: {
// //           _id: { $year: "$createdAt" }, // Group by the year of account creation
// //           count: { $sum: 1 } // Count students per year
// //         }
// //       },
// //       {
// //         $sort: { _id: 1 } // Sort by year in ascending order for charting
// //       }
// //     ]);

// //     // 2. Fetch job postings data grouped by the year of creation
// //     const companiesPostedJobs = await Job.aggregate([
// //       {
// //         $match: {
// //           createdAt: { $exists: true }
// //         }
// //       },
// //       {
// //         $group: {
// //           _id: { $year: "$createdAt" },
// //           count: { $sum: 1 }
// //         }
// //       },
// //       {
// //         $sort: { _id: 1 }
// //       }
// //     ]);

// //     // 3. Get total jobs posted by each company
// //     const companyJobStats = await Company.aggregate([
// //       {
// //         $lookup: {
// //           from: "jobs",
// //           localField: "jobs",
// //           foreignField: "_id",
// //           as: "jobDetails"
// //         }
// //       },
// //       {
// //         $project: {
// //           companyName: 1,
// //           jobCount: { $size: "$jobDetails" }
// //         }
// //       },
// //       {
// //         $match: { jobCount: { $gt: 0 } }
// //       }
// //     ]);

// //     // Summarize total student enrollments and jobs posted
// //     const totalStudents = studentEnrollments.reduce((sum, item) => sum + item.count, 0);
// //     const totalCompanies = companiesPostedJobs.reduce((sum, item) => sum + item.count, 0);

// //     // Response with updated student data for line chart
// //     res.status(200).json({
// //       success: true,
// //       data: {
// //         studentData: studentEnrollments, // Yearly student enrollment data for the line chart
// //         companyData: companiesPostedJobs,
// //         companyJobStats,
// //         totalStudents,
// //         totalCompanies
// //       }
// //     });
// //   } catch (error) {
// //     console.error("Error fetching dashboard stats:", error);
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };


// const User = require('../models/User'); // Assuming your User schema is in models/User.js
// const Profile = require('../models/Profile'); // Assuming your Profile schema is in models/Profile.js
// const Job = require('../models/Job'); // Assuming your Job schema is in models/Job.js

// exports.getDashboardStats = async (req, res) => {
//   try {
//     // Fetch total student and company counts
//     const totalStudents = await User.countDocuments({ accountType: 'Student' });
//     const totalCompanies = await User.countDocuments({ accountType: 'Placement' });

//     // Fetch the number of students enrolled per year
//     const studentData = await User.aggregate([
//       { $match: { accountType: 'Student' } },
//       { $group: { _id: { $year: '$createdAt' }, count: { $sum: 1 } } },
//       { $sort: { _id: 1 } }
//     ]);

//     // Fetch job counts by company
//     const companyJobStats = await Job.aggregate([
//       {
//         $lookup: {
//           from: 'users',
//           localField: 'postedBy', // Assuming Job model has 'postedBy' field referencing company user
//           foreignField: '_id',
//           as: 'company'
//         }
//       },
//       { $unwind: '$company' },
//       {
//         $group: {
//           _id: '$company._id',
//           companyName: { $first: '$company.firstName' }, // Adjust according to your name fields
//           jobCount: { $sum: 1 }
//         }
//       }
//     ]);

//     // Fetch each student's job enrollments
//     const studentJobEnrollments = await Profile.aggregate([
//       {
//         $lookup: {
//           from: 'users',
//           localField: 'user', // Linking Profile.user to User._id
//           foreignField: '_id',
//           as: 'user'
//         }
//       },
//       { $unwind: '$user' },
//       { $match: { 'user.accountType': 'Student' } },
//       {
//         $project: {
//           _id: 0,
//           studentName: { $concat: ['$user.firstName', ' ', '$user.lastName'] },
//           jobCount: { $size: { $ifNull: ['$jobEnrolled', []] } } // Ensure jobEnrolled is an array
//         }
//       }
//     ]);
    

//     // Send the aggregated response
//     res.status(200).json({
//       success: true,
//       data: {
//         studentData,
//         companyData: companyJobStats,
//         totalStudents,
//         totalCompanies,
//         studentJobEnrollments
//       }
//     });

//   } catch (error) {
//     console.error('Error fetching dashboard stats:', error);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// };

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

    // Fetch each student's job enrollments
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

    // Send the aggregated response
    res.status(200).json({
      success: true,
      data: {
        studentData,
        companyData: companyJobStats,
        totalStudents,
        totalCompanies,
        studentJobEnrollments,
        studentJobApplicationsPerYear
      }
    });

  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { getDashboardStats };

