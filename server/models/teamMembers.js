const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const TeamMembers = sequelize.define('teamMembers', {
  teamId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'teams',
      key: 'id'
    }
  },
  memberId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
});

module.exports = TeamMembers;
