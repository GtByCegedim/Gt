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
 *          email: safiamaani1234@gmail.com
 *          password: safia123
 */
/**
 * @swagger
 * tags:
 *  name: Authentification
 *  description: Here we have authentification functions
 */
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Returns a success message and a token
 *    tags: [Authentification]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Authentification'
 *    responses:
 *      200:
 *        description: The login function to identify the user
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Authentification'
 *      401:
 *        description: Unauthorized, Invalid credentials.
 *
 */
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Returns a success message and a token
 *    tags: [Authentification]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Authentification'
 *    responses:
 *      200:
 *        description: The login function to identify the user
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Authentification'
 *      401:
 *        description: Invalid credentials.
 *
 */
/**
 * @swagger
 * /api/auth/forgetpassword:
 *  post:
 *    summary: Returns a success message and send a link to reset the password.
 *    tags: [Authentification]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Authentification'
 *    responses:
 *      200:
 *        description: The forgetPassword function to receive the link to reset the password.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Authentification'
 *      404:
 *        description: User not found.
 *
 */
/**
 * @swagger
 * /api/auth/resetpassword/{token}:
 *  post:
 *    summary: Returns a success message and create a new password.
 *    tags: [Authentification]
 *    parameters:
 *      - in: path
 *        name: token
 *        type: string
 *        required: true
 *        description: String token sent in a link via email.
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Authentification'
 *    responses:
 *      200:
 *        description: The resetPassword function to create a new password.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Authentification'
 *      400:
 *        description: User not found or Invalid token.
 *
 */
authRouter.post("/login", login);
authRouter.post("/forgetpassword", forgetPassword);
authRouter.post("/resetpassword/:token", resetPassword);
module.exports = authRouter;
