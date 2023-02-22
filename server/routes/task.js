const express = require("express");
const {
  addTaskToUser,
  AllTaskOfProject,
  AllTaskOfUser,
  AllMyTasks,
} = require("../controllers/tasks");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post(
  "/add/:id",
  authMiddleware,
  addTaskToUser
  // #swagger.tags = ['Task']
);
router.get(
  "/my",
  authMiddleware,
  AllMyTasks
  // #swagger.tags = ['Task']
);
router.get(
  "/ofuser",
  authMiddleware,
  AllTaskOfUser
  // #swagger.tags = ['Task']
);
router.get(
  "/:id",
  authMiddleware,
  AllTaskOfProject
  // #swagger.tags = ['Task']
);

module.exports = router;
