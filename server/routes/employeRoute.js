const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')
const {AddEmployee,updateUser, deleteUser, findAllUsers} = require('../controllers/employéesController');
const { authMiddleware } = require('../middleware/authMiddleware');


router.post('/add', AddEmployee);
router.put('/update/:id', updateUser);
router.delete('/delete/:id',authMiddleware,deleteUser)
router.get('/all',findAllUsers)
router.use(ErrorHandler)

module.exports = router;
