const express = require("express");
const authRouter = express.Router();

const {
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/userAuthController");

/**
 * @swagger
 * components:
 *    schemas:
 *      Authentification:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: the user email
 *          password:
 *            type: string
 *            description: the user password
 *        example:
 *          email: user@gmail.com
 *          password: User123##
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Returns a success message and a token 
 *    responses:
 *      200:
 *        description: The login function to identify the user
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Authentification'
 * 
*/
authRouter.post("/login", login);
authRouter.post("/forgetpassword", forgetPassword);
authRouter.post("/resetpassword/:token", resetPassword);
module.exports = authRouter;
