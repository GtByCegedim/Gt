const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const Team = sequelize.define("team", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  manager: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  project: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bane: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Team;
