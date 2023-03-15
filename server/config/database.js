const Sequelize = require('sequelize');


const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.password}@postgres:5432/${process.env.DATABASE}`);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');

    // Create the tables for the models
    return sequelize.sync({alert:true});
  })
  .then(async () => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
    
  });


module.exports = sequelize;