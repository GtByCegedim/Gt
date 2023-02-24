const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");

const {
  createTeam,
  findAllTeams,
  addUserInTeam,
} = require("../controllers/team");
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
  "/create/:id",
  authMiddleware,
  createTeam
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.post(
  "/addUser/:id",
  authMiddleware,
  addUserInTeam
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);


router.use(ErrorHandler);

module.exports = router;
