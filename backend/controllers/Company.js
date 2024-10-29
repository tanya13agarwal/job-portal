const { uploadImageToCloudinary } = require("../utils/imageUploader")
// const CourseProgress = require("../models/CourseProgress")
const { convertSecondsToDuration } = require("../utils/secToDuration")
const Job = require("../models/Job")
const Company = require("../models/Company")

// Function to create a new Company
exports.createCompany = async (req, res) => {
  try {
    // Extract fields from request body
    let {
      companyName,
      companyDescription,
      companyWebsite,
      companyLocation,
      jobId
    } = req.body;

    const thumbnail = req.files.thumbnail

    if (!companyName || !companyLocation || !companyDescription || !companyWebsite || !jobId) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }

    // console.log(req.files.)

    // Check if company exists
    let company = await Company.findOne({ companyName: companyName });

    if (company) {
      // If company exists, push the new job ID
      if (!company.jobs.includes(jobId)) {
        company.jobs.push(jobId);
        await company.save();
      } else {
        return res.status(400).json({
          success: false,
          data: company,
          message: "Job already associated with this company",
        });
      }
    } else {
      // Upload the Thumbnail to Cloudinary
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      )
      console.log(companyLocation)

      // If company does not exist, create it and add the job ID
      company = await Company.create({
        companyName,
        companyDescription: companyDescription,
        thumbnail: thumbnailImage.secure_url,
        companyWebsite,
        companyLocation : companyLocation,
        jobs: [jobId]
      });
    }

    console.log(company)
    // Return a success response
    res.status(200).json({
      success: true,
      data: company,
      message: "Company and job association updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create or update company",
      error: error.message,
    });
  }
};


// Edit Course Details
exports.editCompany = async (req, res) => {
  try {
    const { companyId } = req.body
    const updates = req.body
    const company = await Company.findById(companyId)

    if (!company) {
      return res.status(404).json({ error: "Company not found" })
    }

    // If Thumbnail Image is found, update it
    if (req.files) {
      console.log("thumbnail update")
      const thumbnail = req.files.thumbnail
      const thumbnailImage = await uploadImageToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
      )
      company.thumbnail = thumbnailImage.secure_url
    }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        company[key] = updates[key]
      }
    }

    await company.save()

    const updatedCompany = await Company.findOne({
      _id: companyId,
    })
      .populate("jobs")
      .exec()

    res.json({
      success: true,
      message: "Company updated successfully",
      data: updatedCompany,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// Get Course List
exports.getAllCompany = async (req, res) => {
  try {
    const companiesWithPublishedJobs = await Company.aggregate([
      {
        $lookup: {
          from: "jobs",
          localField: "jobs",
          foreignField: "_id",
          as: "jobs",
        },
      },
      // {
      //   $addFields: {
      //     jobs: {
      //       $filter: {
      //         input: "$jobs",
      //         as: "job",
      //         cond: { $eq: ["$$job.status", "Published"] },
      //       },
      //     },
      //   },
      // },
      {
        $match: {
          "jobs.0": { $exists: true }, // Ensures there's at least one published job
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      data: companiesWithPublishedJobs,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Company Data`,
      error: error.message,
    });
  }
};


// Get One Single Course Details
// exports.getCourseDetails = async (req, res) => {
//   try {
//     const { jobId } = req.body
//     const courseDetails = await Course.findOne({
//       _id: courseId,
//     })
//       .populate({
//         path: "instructor",
//         populate: {
//           path: "additionalDetails",
//         },
//       })
//       .populate("category")
//       .populate("ratingAndReviews")
//       .populate({
//         path: "courseContent",
//         populate: {
//           path: "subSection",
//         },
//       })
//       .exec()
//     // console.log(
//     //   "###################################### course details : ",
//     //   courseDetails,
//     //   courseId
//     // );
//     if (!courseDetails || !courseDetails.length) {
//       return res.status(400).json({
//         success: false,
//         message: `Could not find course with id: ${courseId}`,
//       })
//     }

//     if (courseDetails.status === "Draft") {
//       return res.status(403).json({
//         success: false,
//         message: `Accessing a draft course is forbidden`,
//       })
//     }

//     return res.status(200).json({
//       success: true,
//       data: courseDetails,
//     })
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     })
//   }
// }

exports.getCompanyDetails = async (req, res) => {
  try {
    const { companyId } = req.body
    const companyDetails = await Company.findOne({
      _id: companyId,
    })
      .populate("jobs")
      .exec()

    if (!companyDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find company with id: ${companyId}`,
      })
    }

    return res.status(200).json({
      success: true,
      data: companyDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.getFullCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body
    const userId = req.user.id
    const courseDetails = await Course.findOne({
      _id: courseId,
    })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec()

    let courseProgressCount = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    })

    console.log("courseProgressCount : ", courseProgressCount)

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${courseId}`,
      })
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }

    let totalDurationInSeconds = 0
    courseDetails.courseContent.forEach((content) => {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration)
        totalDurationInSeconds += timeDurationInSeconds
      })
    })

    const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {
        courseDetails,
        totalDuration,
        completedVideos: courseProgressCount?.completedVideos
          ? courseProgressCount?.completedVideos
          : [],
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

// Get a list of Course for a given Instructor
exports.getInstructorCourses = async (req, res) => {
  try {
    // Get the instructor ID from the authenticated user or request body
    const instructorId = req.user.id

    // Find all courses belonging to the instructor
    const instructorCourses = await Course.find({
      instructor: instructorId,
    }).sort({ createdAt: -1 })

    // Return the instructor's courses
    res.status(200).json({
      success: true,
      data: instructorCourses,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve instructor courses",
      error: error.message,
    })
  }
}
// Delete the Course
exports.deleteCompany = async (req, res) => {
  try {
    const { jobId } = req.body

    // Find the course
    const job = await Job.findById(jobId)
    if (!job) {
      return res.status(404).json({ message: "Job not found" })
    }

    // Unenroll students from the course
    // const studentsEnrolled = course.studentsEnroled
    // for (const studentId of studentsEnrolled) {
    //   await User.findByIdAndUpdate(studentId, {
    //     $pull: { courses: courseId },
    //   })
    // }

    // Delete sections and sub-sections
    // const courseSections = course.courseContent
    // for (const sectionId of courseSections) {
    //   // Delete sub-sections of the section
    //   const section = await Section.findById(sectionId)
    //   if (section) {
    //     const subSections = section.subSection
    //     for (const subSectionId of subSections) {
    //       await SubSection.findByIdAndDelete(subSectionId)
    //     }
    //   }

    //   // Delete the section
    //   await Section.findByIdAndDelete(sectionId)
    // }

    // Delete the course
    await Job.findByIdAndDelete(jobId)

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}