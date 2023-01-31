const express = require('express');
const { addTaskToUser, AllTaskOfProject,  AllTaskOfUser, AllMyTask } = require('../controllers/tasks');
const router = express.Router();
const {authMiddleware} = require('../middleware/authMiddleware')
/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post('/add/:id',authMiddleware,addTaskToUser);
router.get('/my',authMiddleware,AllMyTask);
router.get('/:id',AllTaskOfProject);
// router.get('/',AllTaskOfUser);

module.exports = router;