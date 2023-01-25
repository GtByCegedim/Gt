const express = require('express');
const { addTaskToUser } = require('../controllers/tasks');
const router = express.Router();

/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post('/add/:id',addTaskToUser);


module.exports = router;