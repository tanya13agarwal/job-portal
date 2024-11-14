const express = require('express');
const router = express.Router();
const { getDashboardStats , averageSalaryStats } = require('../controllers/Dashboard');

router.get('/dashboard-stats', getDashboardStats);
router.get('/averageSalary', averageSalaryStats);

module.exports = router;
