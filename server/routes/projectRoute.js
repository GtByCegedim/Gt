const express = require('express');
const { createProject } = require('../controllers/projectController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add',authMiddleware, createProject)


module.exports = router;