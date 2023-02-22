const express = require("express");
const router = express.Router();
const ErrorHandler = require("../middleware/errorMiddleware");
const {
  AddEmployee,
  updateUser,
  deleteUser,
  findAllUsers,
} = require("../controllers/employéesController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post(
  "/add",
  AddEmployee
  // #swagger.tags = ['Employe']
);
router.put(
  "/update/:id",
  updateUser
  // #swagger.tags = ['Employe']
);
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteUser
  // #swagger.tags = ['Employe']
);
router.get(
  "/all",
  findAllUsers
  // #swagger.tags = ['Employe']
);
router.use(ErrorHandler);

module.exports = router;
