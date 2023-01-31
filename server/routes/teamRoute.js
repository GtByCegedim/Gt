const express = require('express')
const { findAllTeams } = require('../controllers/team')
const ErrorHandler = require('../middleware/errorMiddleware')
const router = express.Router()


router.use(ErrorHandler)
module.exports = router