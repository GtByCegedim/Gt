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
    status: {
      type: Sequelize.ENUM("to_do", "in_progress", "done"),
      defaultValue: "to_do",
      allowNull: false,
    },
    deadline: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });
  
  module.exports = Project;