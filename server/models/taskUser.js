const Sequelize = require('sequelize');
const  sequelize  = require('../config/database')

const TaskUser = sequelize.define("TaskUser", {});

module.exports = TaskUser;