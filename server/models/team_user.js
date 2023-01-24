const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const team_user = sequelize.define('team_user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = team_user;
