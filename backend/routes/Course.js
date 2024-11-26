//Import express
const express = require("express");

//Create an instance of Router from express
const router = express.Router();

//Import the controllers -->

//Course Controller Import
const {createCourse , editCourse , deleteCourse , getFullCourseDetails , getInstructorCourses , showAllCourses , getCourseDetails} = require("../controllers/Course");


//********************************************************************************************************************************************************** */
//                                                          Course Routes
//********************************************************************************************************************************************************** */

//Courses can Only be Created by Instructor
router.post("/createCourse" , auth , isInstructor , createCourse);
//Courses can Only be deleted by Instructor
router.delete("/deleteCourse" , auth , isInstructor , deleteCourse);
//Courses can Only be edited by Instructor
router.post("/editCourse" , auth , isInstructor , editCourse);




//Get all Registered Courses
router.get("/showAllCourses" , showAllCourses);

//Get Details for a Specific Courses
router.post("/getCourseDetails" , getCourseDetails);

// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails)


module.exports = router
