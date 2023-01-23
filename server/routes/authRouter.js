const express = require('express')
const authRouter = express.Router()

const {
  login
} = require('../controllers/userAuthController')

authRouter.post('/login', login);

module.exports = authRouter