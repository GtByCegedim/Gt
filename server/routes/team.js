
const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')

const { createTeam,  acceptInvitation, findAllTeams } = require("../controllers/team");
const { sendTeamInvitation } = require('../middleware/mailer');


router.post('/create', createTeam);
router.post('/invitations', sendTeamInvitation);
router.get('/all',findAllTeams)
router.post('/accept-invitation/:userId/:teamName', acceptInvitation);
router.use(ErrorHandler)

module.exports = router;
