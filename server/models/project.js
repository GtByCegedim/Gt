const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')


const Project = sequelize.define("project", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },   
    deadline: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    manager : {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  
  module.exports = Project;