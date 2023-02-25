const Sequelize = require('sequelize');
const sequelize = require('../config/database')


const Profile = sequelize.define("Profile", {
    adresse: {
      type: Sequelize.STRING,
    },
    telephone: {
      type: Sequelize.STRING,
    },   
    date_de_naissance: {
      type: Sequelize.DATE,
    },
    user: {
        type : Sequelize.INTEGER
    }

  });
  
  module.exports = Profile;