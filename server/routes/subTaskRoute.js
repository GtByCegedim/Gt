const express = require('express');
const  {addSubTask, getSubTaskOfTask, getMySubTasks} = require('../controllers/subTaskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id', addSubTask)
router.get('/mysubtasks', authMiddleware,getMySubTasks)
router.get('/allsubtasks/:id', getSubTaskOfTask)

module.exports = router;