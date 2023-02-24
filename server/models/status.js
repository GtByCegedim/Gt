const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const statut = sequelize.define("statut", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bane: {
    type: Sequelize.BOOLEAN,
    default: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    default: "A faire",
  },
});

module.exports = statut;
