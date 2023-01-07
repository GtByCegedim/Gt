// Load environment variables from .env file
require('dotenv').config();

// Import other dependencies
const express = require('express');
const globalError = require('./middleware/errorMiddleware')

// Import database connection
const sequelize = require('./config/database');

// Set up Express app
const app = express();

// Set up routes, middleware, etc.
app.use(globalError);

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is listening on port' + process.env.PORT);
});

// Handle errors outside express
process.on("unhandledRejection",(err)=> {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
  app.close(()=> {
      console.error('Shutting down....')
      process.exit(1)
  })
  
})