const express = require('express')
const { findAllTeams } = require('../controllers/teamController')
const router = express.Router()

router.get('/all',findAllTeams)

module.exports = router