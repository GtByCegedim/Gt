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
        type: Sequelize.INTEGER
    },
    poste: {
        type: Sequelize.STRING,
    },
    bisness_unit: {
        type: Sequelize.STRING,
    },

});

module.exports = Profile;