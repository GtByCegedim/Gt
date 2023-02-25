const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
  AddProfile,
  UpdateProfile,
  getMyProfile,
} = require("../controllers/profilCtrl");

router.post(
  "/add",
  authMiddleware,
  AddProfile
  // #swagger.tags = ['Profile']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.put(
  "/update",
  authMiddleware,
  UpdateProfile
  // #swagger.tags = ['Profile']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.get(
  "/my",
  authMiddleware,
  getMyProfile
  // #swagger.tags = ['Profile']
  // #swagger.security = [{ "bearerAuth": [] }]
);

router.use(ErrorHandler);

module.exports = router;
