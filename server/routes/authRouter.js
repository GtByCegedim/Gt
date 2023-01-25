const express = require('express')
const authRouter = express.Router()

const {
  login,
  forgetPassword,
  resetPassword
} = require('../controllers/userAuthController')

authRouter.post('/login', login);
authRouter.post('/forgetpassword', forgetPassword)
authRouter.post('/resetpassword/:token', resetPassword)
module.exports = authRouter