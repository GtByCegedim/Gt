const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')



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