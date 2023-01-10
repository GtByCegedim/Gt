const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')
const {AddEmployé,updateUser, deleteUser} = require('../controllers/employéesController');


router.post('/add', AddEmployé);
router.put('/update/:id', updateUser);
router.delete('/delete/:id',deleteUser)
router.use(ErrorHandler)

module.exports = router;
