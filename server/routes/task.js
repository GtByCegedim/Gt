const express = require('express');
const Task = require('../models/task');
const tasksController = require('../controllers/tasks');

const router = express.Router();

router.get('/', tasksController.getAll);
router.post('/', tasksController.create);
router.put('/:id', tasksController.update);
router.delete('/:id', tasksController.delete);

module.exports = router;