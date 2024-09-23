const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, email, password, regno } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({ username, email, password, regno });
        await user.save();

        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Login a user
exports.loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ msg: info.message });

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.json({ msg: 'Logged in successfully', user });
        });
    })(req, res, next);
};

// Forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Generate reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send reset email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_password',
            },
        });

        const mailOptions = {
            to: user.email,
            from: 'your_email@gmail.com',
            subject: 'Password Reset',
            text: `You are receiving this because you have requested the reset of your password.\n\n
                   Please click on the following link, or paste it into your browser to complete the process:\n\n
                   http://localhost:3000/reset/${token}\n\n
                   If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) return res.status(500).json({ error: 'Error sending email' });
            res.json({ msg: 'Password reset email sent' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Reset password
exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) return res.status(400).json({ msg: 'Invalid or expired token' });

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ msg: 'Password reset successful' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
