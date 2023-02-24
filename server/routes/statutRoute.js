const express = require("express");
const {
  addNewStatut,
  updateStatusOfTask,
  deleteStatus,
} = require("../controllers/statusController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/add/:id",
  authMiddleware,
  addNewStatut
  // #swagger.tags = ['Status']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.delete(
  "/delete/:idProject/:idStatut",
  authMiddleware,
  deleteStatus
  // #swagger.tags = ['Status']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.put(
  "/update/:id",
  authMiddleware,
  updateStatusOfTask
  // #swagger.tags = ['Status']
  // #swagger.security = [{ "bearerAuth": [] }]
);

module.exports = router;
