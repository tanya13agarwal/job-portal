const { UploadStream } = require("cloudinary");
const Course = require("../models/Course");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const {convertSecondsToDuration} = require("../utils/secToDuration");

// Function to create a new course
exports.createCourse = async (req , res) => {
    try {
        //fetch data
        let {
            courseName, 
            courseDescription, 
            courseLink,
        } = req.body;

        //get thumbnail
        console.log("thumbnailiamge: " , req.files)
        const thumbnail = req.files.thumbnail;

        //validation
        if(
            !courseName || 
            !courseDescription || 
            !courseLink ||
            !thumbnail
        ) 
            {
            return res.status(400).json({
                success:false,
                message:'All Fields are required',
            })
        }

        // Check if the user is an instructor
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId , {
			accountType: "Placement",
		});
        console.log("Instructor Details : " , instructorDetails);

        if(!instructorDetails) {
            return res.status(404).json({
                success:false,
                message:'Co-ordinator Details not found',
            })
        }

        // upload Image to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail , process.env.FOLDER_NAME);
        console.log("image aag gyuuu",thumbnailImage);

        // Create a new course with the given details
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            courseLink,
            thumbnail : thumbnailImage.secure_url,
        })
        console.log(" newCourse : " , newCourse)

        //return response
        return res.status(200).json({
            success:true,
            message:"Course created successfully",
            data:newCourse, 
        })
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'Failed to create course',
            error:error.message,
        })
    }
}


//Function to edit a made course
exports.editCourse = async(req , res) => {
    try {
        const {courseId} = req.body;
        const updates = req.body;
        const course = await Course.findById(courseId);

        if(!course) {
            return res.status(404).json({
                error : "Course Not Found"
            })
        }

        //if Thumbnail Image is found , update it
        if(req.files) {
            const thumbnail = req.files.thumbnailImage;
            const thumbnailImage = await uploadImageToCloudinary(
                thumbnail,
                process.env.FOLDER_NAME
            );
            course.thumbnail = thumbnailImage.secure_url;
        }

        //update only the fields that are present in the req.body
        for(const key in updates) {
            if(updates.hasOwnProperty(key)) {
                course[key] = updates[key];
            }
        }

        await course.save();

        const updatedCourse = await Course.findOne({
            _id : courseId,
        })

        res.json({
            success : true,
            message : "Course Updated Successfully",
            data : updatedCourse,
        })
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message,
        })
    }
}


//Delete Course Controller
exports.deleteCourse = async(req , res)  => {
    try {
        const {courseId} = req.body;
        console.log(req.body);
        //Find the course
        const course = await Course.findById(courseId);

        if(!course) {
            return res.status(404).json({
                message : "Course Not Found",
            })
        }

        //Delete the Course
        await Course.findByIdAndDelete(courseId)

        const allCourses = await Course.find()

        return res.status(200).json({
            success : true,
            message : "Course Deleted Successfully",
            data : allCourses
        })
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success : false,
            message : "Server Error",
            error : error.message,
        })
    }
}

//get All courses handler function

exports.showAllCourses = async(req , res) => {
    try{
        const allCourses = await Course.find({} , {
            courseName:true,
            courseDescription : true,
            courseLink : true,
            thumbnail : true
        });
        
        return res.status(200).json({
            success:true,
            message:'Data for all courses Fetched successfully',
            data:allCourses,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Cannot Fetch course data',
            error:error.message,
        })
    }
}


//get course details

exports.getCourseDetails = async (req , res) => {
    try {
        //get course ID
        const {courseId} = req.body;
        //find course details
        const courseDetails = await Course.find({_id:courseId})

        //validation
        if(!courseDetails) {
            return res.status(400).json({
                success:false,
                message:`Could not find the course with ${courseId}`,
            })
        }
        //return ressponse
        return res.status(200).json({
            success:true,
            message:"Course Details Fetched successfully",
            data:courseDetails,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}


//GET FULL COURSE DETAILS CONTROLLER
// exports.getFullCourseDetails = async(req , res) => {
//     try {
//         const {courseId} = req.body;
//         const userId = req.user.id;
//         const courseDetails = await Course.findOne({
//             _id : courseId,
//         })
//             .populate({
//                 path : "instructor",
//                 populate : {
//                     path : "additionalDetails",
//                 },
//             })
//             .populate("category")
//             .populate("ratingAndReviews")
//             .populate({
//                 path : "courseContent",
//                 populate : {
//                     path : "subSection",
//                 } 
//             })
//             .exec()
        
//         let courseProgressCount = await CourseProgress.findOne({
//             courseID : courseId,
//             userId : userId,
//         })

//         console.log("CourseProgerssCount : " , courseProgressCount);

//         if(!courseDetails) {
//             return res.status(400).json({
//                 success : false,
//                 message : `Could not find course with id : ${courseId}`,
//             })
//         }
        

//         let totalDurationInSeconds = 0;
//         courseDetails.courseContent.forEach((content) => {
//             content.subSection.forEach((subSection) => {
//                 const timeDurationInSeconds = parseInt(subSection.timeDuration);
//                 totalDurationInSeconds += timeDurationInSeconds;
//             })
//         })

//         const totalDuration = convertSecondsToDuration(totalDurationInSeconds);
        
//         return res.status(200).json({
//             success : true,
//             data : {
//                 courseDetails,
//                 totalDuration,
//                 completedVideos : courseProgressCount?.completedVideos 
//                 ? courseProgressCount?.completedVideos
//                 : [],   
//             }
//         })
//     }
//     catch(error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }



// //Get A list of course for a given Instructor
// exports.getInstructorCourses = async(req , res) => {
//     try {
//         //Get the instructor ID from the authenticated user or request body
//         console.log(req.user);
//         const instructorId = req.user.id;

//         //Find all courses belonging to the instructor
//         const instructorCourses = await Course.find({
//             instructor : instructorId,
//         }).sort({createdAt : -1})
//         console.log(instructorCourses)

//         //Return the instructor's courses
//         res.status(200).json({
//             success : true,
//             data : instructorCourses,
//         })
//     }
//     catch(error) {
//         console.error(error);
//         res.status(500).json({
//             success : false,
//             message : "Failed to retrieve instructor courses",
//             error : error.message,
//         })
//     }
// }