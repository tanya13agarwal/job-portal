const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../middlewares/Auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
//   instructorDashboard,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router