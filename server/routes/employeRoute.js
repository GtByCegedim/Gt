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
 *      Employe:
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
 *    tags: [Employe]
 *    responses:
 *      200:
 *        description: Finds all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Employe'
 *      404:
 *        description: No user was found
 */
/**
 * @swagger
 * /api/employe/add:
 *  post:
 *    summary: Returns a object of created User.
 *    tags: [Employe]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Employe'
 *    responses:
 *      200:
 *        description: The User is created succesfuly.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Employe'
 *      400:
 *        description: Fill all filled.
 *      401:
 *        description: Email already used.
 *
 */
router.post("/add", AddEmployee);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.get("/all", findAllUsers);
router.use(ErrorHandler);

module.exports = router;
