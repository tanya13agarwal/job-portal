const { uploadImageToCloudinary } = require("../utils/imageUploader")
// const CourseProgress = require("../models/CourseProgress")
const { convertSecondsToDuration } = require("../utils/secToDuration")
const Job = require("../models/Job")

// Function to create a new course
exports.createJob = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id

    // Get all required fields from request body
    let {
      jobName,
      jobDescription,
      whatYouWillGet,
      jobLocation,
      minSalary,
      maxSalary,
      branch: _branch,
      batch: _batch,
      category,
      status,
      instructions: _instructions,
    } = req.body

    console.log("req body : " ,req.body);
    // Convert the tag and instructions from stringified Array to Array
    const branch = JSON.parse(_branch)
    const batch = JSON.parse(_batch)
    const instructions = JSON.parse(_instructions)

    console.log("branch", branch)
    console.log("instructions", instructions)

    // Check if any of the required fields are missing
    if (
      !jobName ||
      !jobLocation ||
      !jobDescription ||
      !whatYouWillGet ||
      !maxSalary ||
      !branch.length ||
      !batch.length ||
    //   !thumbnail ||
      !category ||
      !instructions.length
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Mandatory",
      })
    }
    if (!status || status === undefined) {
      status = "Draft"
    }
    
    // Create a new course with the given details
    const newJob = await Job.create({
        jobName,
        jobLocation,
        jobDescription,
        //   instructor: instructorDetails._id,
        whatYouWillGet: whatYouWillGet,
        minSalary : minSalary ? minSalary : 0,
        maxSalary,
        branch,
        batch,
        category,
        // thumbnail: thumbnailImage.secure_url,
        status: status,
        instructions,
    })

    
    // Return the new course and a success message
    res.status(200).json({
      success: true,
      data: newJob,
      message: "job Created Successfully",
    })
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: error.message,
    })
  }
}

// Edit Course Details
exports.editJob = async (req, res) => {
  try {
    const { jobId } = req.body
    const updates = req.body
    const job = await Job.findById(jobId)

    if (!job) {
      return res.status(404).json({ error: "Job not found" })
    }

    // If Thumbnail Image is found, update it
    // if (req.files) {
    //   console.log("thumbnail update")
    //   const thumbnail = req.files.thumbnailImage
    //   const thumbnailImage = await uploadImageToCloudinary(
    //     thumbnail,
    //     process.env.FOLDER_NAME
    //   )
    //   course.thumbnail = thumbnailImage.secure_url
    // }

    // Update only the fields that are present in the request body
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        if (key === "branch" || key === "batch" || key === "instructions") {
          job[key] = JSON.parse(updates[key])
        } else {
          job[key] = updates[key]
        }
      }
    }

    await job.save()

    const updatedJob = await Job.findOne({
      _id: jobId,
    })
    //   .populate({
    //     path: "instructor",
    //     populate: {
    //       path: "additionalDetails",
    //     },
    //   })
    //   .populate("category")
    //   .populate("ratingAndReviews")
    //   .populate({
    //     path: "courseContent",
    //     populate: {
    //       path: "subSection",
    //     },
    //   })
    //   .exec()

    res.json({
      success: true,
      message: "Job updated successfully",
      data: updatedJob,
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
exports.getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find(
      { status: "Published" },
      // {
      //   jobName: true,
      //   price: true,
      //   thumbnail: true,
      //   instructor: true,
      //   ratingAndReviews: true,
      //   studentsEnrolled: true,
      // }
    )
      // .populate("instructor")
      // .exec()

    return res.status(200).json({
      success: true,
      data: allJobs,
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Job Data`,
      error: error.message,
    })
  }
}
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
exports.getJobDetails = async (req, res) => {
  try {
    const { jobId } = req.body
    const jobDetails = await Job.findOne({
      _id: jobId,
    })
    //   .populate({
    //     path: "instructor",
    //     populate: {
    //       path: "additionalDetails",
    //     },
    //   })
    //   .populate("category")
    //   .populate("ratingAndReviews")
    //   .populate({
    //     path: "courseContent",
    //     populate: {
    //       path: "subSection",
    //       select: "-videoUrl",
    //     },
    //   })
    //   .exec()

    if (!jobDetails) {
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

    // let totalDurationInSeconds = 0
    // courseDetails.courseContent.forEach((content) => {
    //   content.subSection.forEach((subSection) => {
    //     const timeDurationInSeconds = parseInt(subSection.timeDuration)
    //     totalDurationInSeconds += timeDurationInSeconds
    //   })
    // })

    // const totalDuration = convertSecondsToDuration(totalDurationInSeconds)

    return res.status(200).json({
      success: true,
      data: {
        jobDetails,
        // totalDuration,
      },
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
exports.deleteJob = async (req, res) => {
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