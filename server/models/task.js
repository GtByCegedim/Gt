const Sequelize = require('sequelize');

const  sequelize  = require('../config/database')


const Task = sequelize.define('task', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  manager : {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status:{
    type: Sequelize.INTEGER,
    allowNull: false

  },
  assignedTo:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reusable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Task;