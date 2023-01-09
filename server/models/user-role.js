const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const user_role = sequelize.define('user_role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = user_role;


;