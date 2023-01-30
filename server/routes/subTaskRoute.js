const express = require('express');
const  {addSubTask, getSubTaskOfTask} = require('../controllers/subTaskController');
const router = express.Router();

router.post('/:id', addSubTask)
router.get('/allsubtasks/:id', getSubTaskOfTask)

module.exports = router;