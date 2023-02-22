const express = require("express");
const {
  createProject,
  UpdateProject,
  findALLprojects,
  OnlyMyProjects,
  baneProject,
} = require("../controllers/projectController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/add",
  authMiddleware,
  createProject
  // #swagger.tags = ['Project']
);
router.put(
  "/update/:id",
  authMiddleware,
  UpdateProject
  // #swagger.tags = ['Project']
);
router.get(
  "/all",
  authMiddleware,
  findALLprojects
  // #swagger.tags = ['Project']
);
router.get(
  "/all/my",
  authMiddleware,
  OnlyMyProjects
  // #swagger.tags = ['Project']
);
router.put(
  "/bane/:id",
  authMiddleware,
  baneProject
  // #swagger.tags = ['Project']
);
module.exports = router;
