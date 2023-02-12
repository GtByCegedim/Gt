const express = require('express');
const { createProject, UpdateProject, findALLprojects } = require('../controllers/projectController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add',authMiddleware, createProject)
router.put('/update/:id',authMiddleware, UpdateProject)
router.get('/all',findALLprojects)

module.exports = router;