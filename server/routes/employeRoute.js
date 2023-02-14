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

/**
 * @swagger
 * components:
 *    schemas:
 *      Users:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            description: the user email
 *          password:
 *            type: string
 *            description: the user password
 *          firsName:
 *            type: string
 *            description: the user first name
 *          lasName:
 *            type: string
 *            description: the user last name
 *        example:
 *            id: 10,
 *            email: user@gmail.com
 *            password: $2a$10$9HaXSaWIhhS6b1GwdcexA.b0xDsqIreb8wa3xWNlA5fG5/PqWmZpu
 *            firstName: user name
 *            lastName: user password
 *            createdAt: 2023-02-01T08:54:09.200Z
 *            updatedAt: 2023-02-01T08:54:09.200Z
 */

/**
 * @swagger
 * /api/employe/all:
 *  get:
 *    summary: Returns an object of all users informations
 *    responses:
 *      200:
 *        description: Finds all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *
 */

router.post("/add", AddEmployee);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.get("/all", findAllUsers);
router.use(ErrorHandler);

module.exports = router;
