// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Company Controllers Import
const {
    createCompany,
    getCompanyDetails,
    editCompany,
    deleteCompany,
    getAllCompany,
    getPublishedCompanyDetails,
} = require("../controllers/Company")

// Importing Middlewares
const { auth, isPlacement, isStudent, isAdmin } = require("../middlewares/Auth")

// ********************************************************************************************************
//                                      Company routes
// ********************************************************************************************************

// Company can Only be Created by Placement
router.post("/createCompany", auth, isPlacement, createCompany)
// Get Details for a Specific Company
router.post("/getCompanyDetails", getCompanyDetails)
// Edit Company routes
router.post("/editCompany", auth, isPlacement, editCompany)
// Delete a Company
router.delete("/deleteCompany", deleteCompany)
//Get all company
router.get("/getAllCompany", getAllCompany)
//Get all published company
router.get("/getPublishedCompanyDetails", getPublishedCompanyDetails)

module.exports = router
