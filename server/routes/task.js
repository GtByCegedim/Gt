const express = require('express');
const { addTaskToUser, AllTaskOfProject } = require('../controllers/tasks');
const router = express.Router();
const {authMiddleware} = require('../middleware/authMiddleware')
/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post('/add/:id',authMiddleware,addTaskToUser);
router.get('/:id',AllTaskOfProject);

module.exports = router;