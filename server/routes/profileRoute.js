const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    AddProfile, UpdateProfile
} = require('../controllers/profilCtrl')


router.post(
  "/add",
  authMiddleware,
  AddProfile
);

router.put(
    "/update",
    authMiddleware,
    UpdateProfile
  );
  

router.use(ErrorHandler);

module.exports = router;
