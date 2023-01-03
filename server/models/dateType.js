const Sequelize = require('sequelize');

const  sequelize  = require('../config/databse')
const relationships = require('./index');


const DateType = sequelize.define('dateType', {
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = DateType;