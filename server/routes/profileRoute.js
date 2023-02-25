const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    AddProfile
} = require('../controllers/profilCtrl')
router.post(
  "/add",
  authMiddleware,
  AddProfile
);

router.use(ErrorHandler);

module.exports = router;
