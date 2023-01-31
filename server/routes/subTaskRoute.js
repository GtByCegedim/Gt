const express = require('express');
const  {addSubTask, getSubTaskOfTask, getMySubTasks} = require('../controllers/subTaskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id', addSubTask)
router.get('/allsubtasks/:id', getSubTaskOfTask)
router.get('/mysubtasks', authMiddleware,getMySubTasks)

module.exports = router;