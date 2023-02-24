const express = require("express");
const authRouter = express.Router();

const {
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/userAuthController");

authRouter.post(
  "/login",
  login
  // #swagger.tags = ['Authentification']
);
authRouter.post(
  "/forgetpassword",
  forgetPassword
  // #swagger.tags = ['Authentification']
);
authRouter.post(
  "/resetpassword/:token",
  resetPassword
  // #swagger.tags = ['Authentification']
);
module.exports = authRouter;
