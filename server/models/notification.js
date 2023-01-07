const Sequelize = require('sequelize');

const  sequelize  = require('../config/database')
const relationships = require('./index');

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