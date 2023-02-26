const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const task_statut = sequelize.define('task_statut', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project: {
    type: Sequelize.INTEGER,
   
  },
});

module.exports = task_statut;
