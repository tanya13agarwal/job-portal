const express = require('express');
const router = express.Router();
const { getDashboardStats, averageSalaryStats, predictPlacement } = require('../controllers/Dashboard');

router.get('/dashboard-stats', getDashboardStats);
router.get('/averageSalary', averageSalaryStats);
router.post('/predict-placement', predictPlacement);

module.exports = router;