const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");

const {
  createTeam,
  findAllTeams,
  acceptInvitation,
} = require("../controllers/team");
const { sendTeamInvitation } = require("../middleware/mailer");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get(
  "/all",
  authMiddleware,
  isAdmin,
  findAllTeams
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.post(
  "/create",
  authMiddleware,
  createTeam
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.post(
  "/accept-invitation/:userId/:teamName",
  authMiddleware,
  acceptInvitation
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.use(ErrorHandler);

module.exports = router;
