const express = require('express');
const  {addSubTask, getSubTaskOfTask, getMySubTasks} = require('../controllers/subTaskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id',authMiddleware, addSubTask)
router.get('/mysubtasks', authMiddleware,getMySubTasks)
router.get('/allsubtasks/:id',authMiddleware, getSubTaskOfTask)

module.exports = router;