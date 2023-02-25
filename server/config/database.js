const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.password, {
  dialect: 'postgres',
  logging: false,
});

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