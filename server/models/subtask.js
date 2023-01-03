const Sequelize = require('sequelize');

const  sequelize  = require('../config/databse')
const relationships = require('./index');

const Subtask = sequelize.define('Subtask', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Subtask;