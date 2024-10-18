const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req , res , next) => {
        try {
        //extract token
        console.log(req.header("Authorization").replace("Bearer ", ""))
        const token = req.cookies.token
                        ||req.body.token
                        ||req.header("Authorization").replace("Bearer ", "");

        

        //if token missing , then return response
        if(!token) {
            return res.status(401).json({
                success:false,
                message:"Token is missing",
            });
        }

        //verify the token
        try {
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err) {
            //verification issue
            return res.status(401).json({
                success:false,
                message:"token is invalid",
            });
        }
        next();
    }
    catch(error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating the token",
        })
    }
}

//isStudent
exports.isStudent = async (req , res , next) => {
    try {
        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                seccess:false,
                message:'This is a protected route for Students only',
            });
        }
        next();
    }
    catch(error) {
        res.status(500).json({
            success:false,
            message:'User accountType cannot be verified, please try again',
        })
    }
}

//isInstructor
exports.isPlacement = async (req , res , next) => {
    try {
        if(req.user.accountType !== "Placement") {
            return res.status(401).json({
                seccess:false,
                message:'This is a protected route for Placement only',
            });
        }
        next();
    }
    catch(error) {
        res.status(500).json({
            success:false,
            message:'User accountType cannot be verified, please try again',
        })
    }
}

//isAdmin
exports.isAdmin = async (req , res , next) => {
    try {
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                seccess:false,
                message:'This is a protected route for Admin only',
            });
        }
        next();
    }
    catch(error) {
        res.status(500).json({
            success:false,
            message:'User accountType cannot be verified, please try again',
        })
    }
}