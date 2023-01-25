
const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')

const { createTeam, sendInvitations, findAllTeams } = require("../controllers/team");

router.post('/create', createTeam);
router.post('/invitations', sendInvitations);
router.get('/all',findAllTeams)
router.use(ErrorHandler)

module.exports = router;
