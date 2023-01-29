const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const Team = sequelize.define("team", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamLeaderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Team;
