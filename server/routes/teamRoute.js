const express = require('express')
const { findAllTeams } = require('../controllers/teamController')
const ErrorHandler = require('../middleware/errorMiddleware')
const router = express.Router()


router.use(ErrorHandler)
module.exports = router