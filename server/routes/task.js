const express = require("express");
const {
  addTaskToUser,
  AllTaskOfProject,
  AllTaskOfUser,
  AllMyTasks,
  NumberAllTaskOfProject,
  UpdateUserTsak,
  addTaskFromHome,
  allTaskReusable,
  fetchTask,
} = require("../controllers/tasks");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.get(
  "/my",
  authMiddleware,
  AllMyTasks
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.get(
  "/ofuser",
  authMiddleware,
  AllTaskOfUser
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.get(
  "/infoTask/:id",
  authMiddleware,
  fetchTask
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.get(
  "/stat/:id",
  authMiddleware,
  NumberAllTaskOfProject
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);


router.get(
  "/:id",
  authMiddleware,
  AllTaskOfProject
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.post(
  "/add/:id",
  authMiddleware,
  addTaskToUser
  // #swagger.tags = ['Task']
  // #swagger.security = [{ "bearerAuth": [] }]
);

module.exports = router;
