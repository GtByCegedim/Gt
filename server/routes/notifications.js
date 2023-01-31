const express = require('express')
const notifRouter = express.Router()

const {
  getAllNotifications,
  getOneNotification
} = require('../controllers/notifications')

notifRouter.get('/', getAllNotifications)
notifRouter.get('/:id', getOneNotification)

module.exports = notifRouter