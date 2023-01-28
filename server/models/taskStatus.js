  const Sequelize = require('sequelize');

  const  sequelize  = require('../config/database')
  

  const TaskStatus = sequelize.define('taskStatus', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      default:"A faire"
    }
    
    });

  module.exports = TaskStatus;