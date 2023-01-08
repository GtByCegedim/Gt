const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')
const AddEmployé = require('../controllers/employéesController');



router.post('/add', AddEmployé);

router.use(ErrorHandler)

module.exports = router;
