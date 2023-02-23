const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");
const {
  AddEmployee,
  updateUser,
  deleteUser,
  findAllUsers,
} = require("../controllers/employéesController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get(
  "/all",
  authMiddleware,
  isAdmin,
  findAllUsers
  // #swagger.tags = ['Employe']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.post(
  "/add",
  authMiddleware,
  isAdmin,
  AddEmployee
  // #swagger.tags = ['Employe']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.put(
  "/update/:id",
  authMiddleware,
  isAdmin,
  updateUser
  // #swagger.tags = ['Employe']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.delete(
  "/delete/:id",
  authMiddleware,
  isAdmin,
  deleteUser
  // #swagger.tags = ['Employe']
  // #swagger.security = [{ "bearerAuth": [] }]
);
router.use(ErrorHandler);

module.exports = router;
