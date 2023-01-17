const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const Team = sequelize.define("team", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  members: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: [],
  },
});

module.exports = Team;
