const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')


const Notification = sequelize.define('notification', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Notification;