const Sequelize = require('sequelize')
const Notification = require('../models/notification')


const getAllNotifications = () => {
  console.log('All notifications')
}
const getOneNotification = () => {
  console.log('Only one notification')
}

module.exports = {
  getAllNotifications,
  getOneNotification
}