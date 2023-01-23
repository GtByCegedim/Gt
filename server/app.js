// Load environment variables from .env file
require('dotenv').config();

// Import other dependencies
const express = require('express');
const globalError = require('./middleware/errorMiddleware')
const employeRouter = require('./routes/employeRoute')
// Import database connection
const {
  DateType,
  Notification,
  Task,
  User,
  Role,
  Policy,
  Subtask,
  TaskStatus
} = require('./models');
const sequelize = require('./config/database');
//Import admin's creation config
const createAdmin = require('./config/admin')
createAdmin()
// Set up Express app
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
/* A middleware that is used to route the request to the employeRouter. */
app.use('/api/employe', employeRouter)
// Route d'authentification: 
const authRouter = require('./routes/authRouter')
app.use('/api/auth', authRouter)
// Set up routes, middleware, etc.
app.use(globalError);

// Start the server
const server = app.listen(process.env.PORT, () => {
  console.log('Server is listening on port' + process.env.PORT);
});


// Handle errors outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
  app.close(() => {
    console.error('Shutting down....')
    process.exit(1)
  })

})

module.exports = app