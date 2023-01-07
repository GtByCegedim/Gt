const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')


const Policy = sequelize.define('policy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.TEXT
  },
  rules: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Policy;