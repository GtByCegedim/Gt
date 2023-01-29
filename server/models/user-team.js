const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const user_team = sequelize.define('user_team', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = user_team;
