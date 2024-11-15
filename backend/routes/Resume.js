const express = require('express');
const { compileLatex } = require('../controllers/Resume');
const router = express.Router();


router.post('/compile-latex', compileLatex);  

module.exports = router;