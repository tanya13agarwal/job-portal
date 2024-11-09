const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto")


//Reset Password token
exports.resetPasswordToken = async (req , res) => {
    try {
            //get email from req body
            const email = req.body.email;
            //check user for this email, email validation
            const user = await User.findOne({email : email});
            if(!user) {
                return res.json({
                    success:false,
                    message:'Your email is not registered with us'
                });
            }
            //generate token
            const token = crypto.randomBytes(20).toString("hex");
            //update user by adding token and expiration time
            const updatedDetails = await User.findOneAndUpdate(
                {email : email},
                {
                    token : token,
                    resetPasswordExpires: Date.now() + 5*60*1000,
                },
                {new : true}
            );
            console.log("DETAILS", updatedDetails);
            //create URL
            const url = `http://localhost:3000/update-password/${token}`;
            //send mail containing the url
            await mailSender(email,
                            "Passsword Reset Link" , 
                            `Your Link for email verification is ${url}. Please click this url to reset your password.`);
            
            //return response
            return res.json({
                success:true,
                message:'Email sent successfully, please check email and change pwd',
            })
        }
        catch(error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                message:'Something went wrong while sending reset pwd mail',
            })
        }
}


//reset password
exports.resetPassword = async (req , res) => {
        try {
            //data fetch
        const {password , confirmPassword , token} = req.body;
        //validation 
        if(password !== confirmPassword) {
            return res.json({
                success:false,
                message:'Password not matching',
            });
        }

        //get userdetails from db using token
        const userDetails = await User.findOne({token : token});
        //if no entry - invalid token
        if(!userDetails) {
            return res.json({
                success:false,
                message:'Token is invalid',
            });
        }
        //token time check
        if (!(userDetails.resetPasswordExpires > Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password , 10);

        //password update
        await User.findOneAndUpdate(
            {token : token},
            {password : hashedPassword},
            {new : true},
        );

        //return response
        return res.status(200).json({
            success:true,
            message : 'Password reset successful',
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong while sending reset pwd mail',
        })
    }
}


