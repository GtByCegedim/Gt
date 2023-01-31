const express = require('express');
const { addTaskToUser, AllTaskOfProject,  AllTaskOfUser, AllMyTasks } = require('../controllers/tasks');
const router = express.Router();
const {authMiddleware, isAdmin} = require('../middleware/authMiddleware')
/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post('/add/:id',authMiddleware,addTaskToUser);
router.get('/my',authMiddleware,AllMyTasks);
router.get('/ofuser',authMiddleware,AllTaskOfUser);
router.get('/:id',authMiddleware,AllTaskOfProject);


module.exports = router;