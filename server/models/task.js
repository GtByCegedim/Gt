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
  deadline: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dateTypeId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

module.exports = Task;