const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.password, {
  dialect: 'postgres',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
