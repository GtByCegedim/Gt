const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://bader:2001@postgres:5432/GT');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');

    // Create the tables for the models
    return sequelize.sync();
  })
  .then(async () => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });


module.exports = sequelize;