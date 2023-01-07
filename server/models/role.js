const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')


const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  permissions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
});



module.exports = Role;