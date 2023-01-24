const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const project_User = sequelize.define('project_User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = project_User;
