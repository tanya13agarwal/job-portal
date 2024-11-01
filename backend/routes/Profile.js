const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../middlewares/Auth")
const {
  deleteAccount,
  updateProfile,
  getAllUser,
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
router.get("/getAllUser", getAllUser)
// Get Enrolled Courses
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router