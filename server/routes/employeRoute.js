const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')
const {AddEmployé,updateUser} = require('../controllers/employéesController');


router.post('/add', AddEmployé);
router.put('/update/:id', updateUser);

router.use(ErrorHandler)

module.exports = router;
