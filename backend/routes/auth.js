const express = require('express');
const { signup, login, logout, forgotPassword, resetPassword, changePassword } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:resetToken', resetPassword);
router.post('/change-password', authMiddleware, changePassword);

module.exports = router;
