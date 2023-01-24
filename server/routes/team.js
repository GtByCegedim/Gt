
const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')

const { createTeam, sendInvitations } = require("../controllers/team");

router.post('/create', createTeam);
router.post('/invitations', sendInvitations);
router.use(ErrorHandler)

module.exports = router;
