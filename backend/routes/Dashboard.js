const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/Dashboard');

router.get('/dashboard-stats', getDashboardStats);

module.exports = router;
