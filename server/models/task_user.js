const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const task_user = sequelize.define('task_user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports =task_user;
