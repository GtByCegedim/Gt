const express = require('express');
const { createProject, UpdateProject } = require('../controllers/projectController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add',authMiddleware, createProject)
router.put('/update/:id',authMiddleware, UpdateProject)


module.exports = router;