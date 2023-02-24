// Load environment variables from .env file
require("dotenv").config();

// Import other dependencies
const express = require("express");
const globalError = require("./middleware/errorMiddleware");
const employeRouter = require("./routes/employeRoute");
const teamRouter = require("./routes/team");
const taskRouter = require("./routes/task");
const authRouter = require("./routes/authRouter");
const subTaskRouter = require("./routes/subTaskRoute");
const statutouter = require("./routes/statutRoute");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const ProjectRouter = require("./routes/projectRoute");

// Import database connection
const {
  DateType,
  Notification,
  User,
  Role,
  Policy,
  Task,
  Subtask,
  Project,
  Team,
} = require("./models");
const sequelize = require("./config/database");
//Import admin's creation config
// const createAdmin = require("./config/admin");
// createAdmin();
// //Import creation Roles
// const createRole = require("./config/role");
// createRole();

// Set up Express app
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
/* A middleware that is used to route the request to the employeRouter. */

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GT by CEGEDIM",
      version: "1.0.0",
      description:
        "Une application web de gestion des projets et taches au sein de CEGEDIM",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route d'authentification:
app.use("/api/auth", authRouter);
app.use("/api/employe", employeRouter);
app.use("/api/teams", teamRouter);
app.use("/api/task", taskRouter);
app.use("/api/subtask", subTaskRouter);
app.use("/api/status", statutouter);
app.use("/api/project", ProjectRouter);

// Set up routes, middleware, etc.
app.use(globalError);

// Start the server
const server = app.listen(process.env.PORT, () => {
  console.log("Server is listening on port" + process.env.PORT);
});

// Handle errors outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("Shutting down....");
    process.exit(1);
  });
});
