const express = require("express");
const {
  createProject,
  UpdateProject,
  findALLprojects,
  OnlyMyProjects,
  baneProject,
} = require("../controllers/projectController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.get(
  "/all",
  authMiddleware,
  isAdmin,
  findALLprojects
  // #swagger.tags = ['Project']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.get(
  "/all/my",
  authMiddleware,
  OnlyMyProjects
  // #swagger.tags = ['Project']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.post(
  "/add",
  authMiddleware,
  createProject
  // #swagger.tags = ['Project']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.put(
  "/update/:id",
  authMiddleware,
  UpdateProject
  // #swagger.tags = ['Project']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.put(
  "/bane/:id",
  authMiddleware,
  baneProject
  // #swagger.tags = ['Project']
  // #swagger.security = [{ "bearerAuth": [] }]
);
module.exports = router;
