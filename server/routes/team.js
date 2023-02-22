const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");

const {
  createTeam,
  findAllTeams,
  acceptInvitation,
} = require("../controllers/team");
const { sendTeamInvitation } = require("../middleware/mailer");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post(
  "/create",
  authMiddleware,
  createTeam
  // #swagger.tags = ['Team']
);
router.post(
  "/invitations",
  sendTeamInvitation
  // #swagger.tags = ['Team']
);
router.get(
  "/all",
  findAllTeams
  // #swagger.tags = ['Team']
);
router.post(
  "/accept-invitation/:userId/:teamName",
  acceptInvitation
  // #swagger.tags = ['Team']
);
router.use(ErrorHandler);

module.exports = router;
