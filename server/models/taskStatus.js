const Sequelize = require('sequelize');

const  sequelize  = require('../config/database')
const relationships = require('./index');

const TaskStatus = sequelize.define('taskStatus', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  taskId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Task',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  });

module.exports = TaskStatus;