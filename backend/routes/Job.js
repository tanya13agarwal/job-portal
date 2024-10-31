// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
    createJob,
  getAllCourses,
  getJobDetails,
  getFullCourseDetails,
  editJob,
  applyForJob,
  getInstructorCourses,
  deleteJob,
} = require("../controllers/Job")

// Importing Middlewares
const { auth, isPlacement, isStudent, isAdmin } = require("../middlewares/Auth")

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createJob", auth, isPlacement, createJob)
//Add a Section to a Course
// router.post("/addSection", auth, isPlacement, createSection)
// Update a Section
// router.post("/updateSection", auth, isPlacement, updateSection)
// Delete a Section
// router.post("/deleteSection", auth, isPlacement, deleteSection)
// Edit Sub Section
// router.post("/updateSubSection", auth, isPlacement, updateSubSection)
// Delete Sub Section
// router.post("/deleteSubSection", auth, isPlacement, deleteSubSection)
// Add a Sub Section to a Section
// router.post("/addSubSection", auth, isPlacement, createSubSection)
// Get all Registered Courses
// router.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/getJobDetails", getJobDetails)
// Get Details for a Specific Courses
// router.post("/getFullCourseDetails", auth, getFullCourseDetails)
// Edit Course routes
router.post("/editJob", auth, isPlacement, editJob)
//Apply For A Job
router.post("/applyForJob", auth, isStudent, applyForJob)
// Get all Courses Under a Specific Instructor
// router.get("/getInstructorCourses", auth, isPlacement, getInstructorCourses)
// Delete a Course
router.delete("/deleteJob", deleteJob)

// router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

module.exports = router
