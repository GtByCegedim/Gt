const express = require('express');
const { createProject, UpdateProject, findALLprojects, OnlyMyProjects, baneProject } = require('../controllers/projectController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add',authMiddleware, createProject)
router.put('/update/:id',authMiddleware, UpdateProject)
router.get('/all',authMiddleware,findALLprojects)
router.get('/all/my',authMiddleware,OnlyMyProjects)
router.put('/bane/:id',authMiddleware,baneProject)
module.exports = router;