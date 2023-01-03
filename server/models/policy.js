const Sequelize = require('sequelize');

const  sequelize  = require('../config/databse')
const relationships = require('./index');

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