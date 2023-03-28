const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");

const {
  createTeam,
  findAllTeams,
  addUserInTeam,
  baneTeam,
  findAllUserOfTeam,
  findAllUsersOfProject,
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

router.put(
  "/bane/:id",
  authMiddleware,
  baneTeam
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.get(
  "/allUser/:id",
  authMiddleware,
  findAllUserOfTeam
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.get(
  "/allUser",
  authMiddleware,
  findAllUsersOfProject
  // #swagger.tags = ['Team']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.use(ErrorHandler);

module.exports = router;
