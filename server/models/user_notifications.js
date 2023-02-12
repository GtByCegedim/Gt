const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const user_notifications = sequelize.define('user_notifications', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = user_notifications;
