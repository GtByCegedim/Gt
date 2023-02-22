const express = require("express");
const {
  addNewStatut,
  updateStatusOfTask,
} = require("../controllers/statusController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/add/:id",
  authMiddleware,
  addNewStatut
  // #swagger.tags = ['Status']
);
// router.delete('/delete/:idProject/:idStatut',authMiddleware,this.delete)
router.put(
  "/update/:id",
  authMiddleware,
  updateStatusOfTask
  // #swagger.tags = ['Status']
);

module.exports = router;
