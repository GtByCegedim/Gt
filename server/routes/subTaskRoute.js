const express = require("express");
const {
  addSubTask,
  getSubTaskOfTask,
  getMySubTasks,
} = require("../controllers/subTaskController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/:id",
  authMiddleware,
  addSubTask
  // #swagger.tags = ['Subtask']
);
router.get(
  "/mysubtasks",
  authMiddleware,
  getMySubTasks
  // #swagger.tags = ['Subtask']
);
router.get(
  "/allsubtasks/:id",
  authMiddleware,
  getSubTaskOfTask
  // #swagger.tags = ['Subtask']
);

module.exports = router;
