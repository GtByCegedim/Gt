const Task = require("../models/task");
const User = require("../models/user");
const Project = require("../models/project");
const Task_statut = require("../models/task_statut");
const DateType = require("../models/dateType");
const TaskUser = require("../models/task_user");
const mailer = require("../middleware/mailer");
const Storage = require("local-storage");
const ErrorResponse = require("../utils/error");
const Statut = require("../models/status");
const Team = require("../models/team");
const Team_User = require("../models/team_user");
const Sequelize = require("sequelize");
const Status = require("../models/status");
const { finished } = require("nodemailer/lib/xoauth2");
/**
 * It creates a task and adds it to the users
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 */
const addTaskToUser = async (req, res, next) => {
  const manager = req.user;
  const project_id = req.params.id;
  const { body } = req;
  try {
    if (
      !body.title ||
      !body.description ||
      !body.duration ||
      !body.unit ||
      !body.email
    ) {
      return next(new ErrorResponse("Fill all filled and users", 401));
    }
    /* Checking if the user exists in the database. */
    const sheckUser = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (!sheckUser) return next(new ErrorResponse("User not found", 404));
    const manager_id = manager.id;
    const findProject = await Project.findByPk(project_id);
    if (!findProject) {
      return next(
        new ErrorResponse("Sory You Are Not Manager Of this Project", 401)
      );
    }
    if (findProject.manager != manager_id)
      return next(new ErrorResponse("You are not manager ", 401));
    /* It creates a date type. */
    const addDateType = await DateType.create({
      duration: body.duration,
      unit: body.unit,
    });
    if (!addDateType) {
      return next(new ErrorResponse("Date Type Not created ", 401));
    }
    const id_dateType = addDateType.id;
    const findDefaultStatut = await Statut.findOne({
      where: {
        status: "A faire",
        project: project_id,
      },
    });
    if (!findDefaultStatut)
      return next(new ErrorResponse("statut not found", 404));
    const statusId = findDefaultStatut.id;
    const userId = sheckUser.id;
    /* It creates a task and adds it to the users */
    const findTeam = await Team.findOne({
      where: {
        project: project_id,
      },
    });
    if (!findTeam) return next(new ErrorResponse("team not found", 404));
    const checkUserTeam = await Team_User.findOne({
      where: {
        teamId: findTeam.id,
        userId: userId,
      },
    });
    if (!checkUserTeam)
      return next(new ErrorResponse("user not a member", 401));
    const creatTask = await Task.create({
      title: body.title,
      description: body.description,
      dateTypeId: id_dateType,
      projectId: project_id,
      manager: manager_id,
      status: statusId,
      assignedTo: userId,
    });
    if (!creatTask) {
      return next(new ErrorResponse("Task not created", 401));
    }
    /* A loop that iterates over the users and creates a relation between the task and the users. */
    await res.json({
      msg: "task added to users",
    });
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
};

/**
 * @function AllTaskOfProject
 * @description Retrieve all tasks associated with a given project
 * @route GET /api/v1/projects/:id/tasks
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Array} Array of tasks associated with the project
 * @throws {ErrorResponse} If no tasks are found or an error occurs while querying the database
 */
const NumberAllTaskOfProject = async (req, res, next) => {
  try {
    const project_id = req.params.id;
    const manager_id = req.user.id;
    const findProject = await Project.findByPk(project_id);
    if (!findProject) {
      return next(
        new ErrorResponse("Sorry, you are not the manager of this project", 401)
      );
    }
    if (findProject.manager != manager_id) {
      return next(new ErrorResponse("You are not the manager", 401));
    }
    const statuses = await Status.findAll({ where: { project: project_id } });
    const ids = statuses.map((status) => status.dataValues.id);
    const statusNames = statuses.map((status) => status.dataValues.status);
    const taskCounts = await Promise.all(
      ids.map(async (statusId, index) => {
        const count = await Task.count({
          where: {
            projectId: project_id,
            manager: manager_id,
            status: statusId,
          },
        });
        return { status: statusNames[index], count: count };
      })
    );
    res.json(taskCounts);
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
};

const AllTaskOfProject = async (req, res, next) => {
  try {
    const project_id = req.params.id;
    const manager_id = req.user.id;
    const findProject = await Project.findByPk(project_id);
    if (!findProject) {
      return next(
        new ErrorResponse("Sorry, you are not the manager of this project", 401)
      );
    }
    if (findProject.manager != manager_id) {
      return next(new ErrorResponse("You are not the manager", 401));
    }

    // Récupérer tous les statuts, même s'ils n'ont pas été utilisés dans le projet
    const statuses = await Status.findAll({ where: { project: project_id } });

    // Récupérer les tâches du projet en joignant la table Status pour récupérer le nom du statut
    const tasks = await Task.findAll({
      where: {
        projectId: project_id,
        manager: manager_id,
      },
      include: [
        {
          model: Status,
          attributes: ["status"],
          as: "Status",
        },
        {
          model: User,
          attributes: ["firstName", "lastName"],
          as: "AssignationTo",
        },
      ],
    });

    // Créer un objet pour stocker les tâches par nom de statut
    const tasksByStatus = tasks.reduce((acc, task) => {
      const statusName = task.Status.status;
      if (!acc[statusName]) {
        acc[statusName] = [];
      }
      acc[statusName].push(task);
      return acc;
    }, {});

    // Ajouter tous les statuts qui n'ont pas été utilisés dans le projet
    statuses.forEach((status) => {
      const statusName = status.status;
      if (!tasksByStatus[statusName]) {
        tasksByStatus[statusName] = [];
      }
    });

    res.json({
      message: `${findProject.name}`,
      tasksByStatus,
    });
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
};

/**
 * @function AllTaskOfUser
 * @description Retrieve all tasks assigned to a user by their first and last name
 * @route GET /api/tasks/ofuser
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Array} Array of tasks assigned to the user
 * @throws {ErrorResponse} If the user is not found or an error occurs while querying the database
 */
const AllTaskOfUser = async (req, res, next) => {
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  let taskIds = [];
  try {
    const findUserByName = await User.findOne({
      where: {
        lastName: lastName,
        firstName: firstName,
      },
    });
    if (!findUserByName) {
      return next(new ErrorResponse("no User found", 404));
    }
    const id_user = findUserByName.id;
    const findTask = await TaskUser.findAll({
      where: {
        userId: id_user,
      },
    });
    if (!findTask) {
      return next(new ErrorResponse("no task assigned in this User", 404));
    }
    findTask.forEach((task_user) => {
      taskIds.push(task_user.dataValues.taskId);
    });
    let allTasks = [];
    for (let i = 0; i < taskIds.length; i++) {
      const findAllTask = await Task.findAll({
        where: {
          id: taskIds[i],
        },
      });
      allTasks.push(findAllTask);
    }
    res.json(allTasks);
  } catch (error) {
    return next(new ErrorResponse(error, 404));
  }
};

/**
 * @desc Get all tasks assigned to a specific user
 * @route GET /api/v1/tasks/mytasks
 * @access Private
 */
const AllMyTasks = async (req, res, next) => {
  try {
    // Get the user ID from the request object
    const userId = req.user.id;

    // Find all task-user associations where the user ID matches the one from the request
    const taskUsers = await TaskUser.findAll({
      where: {
        userId,
      },
    });

    // If there are no tasks assigned to this user, return a 404 error
    if (!taskUsers.length)
      return next(new ErrorResponse("No tasks assigned to this user", 404));

    // Extract the task IDs from the task-user associations
    const taskIds = taskUsers.map((taskUser) => taskUser.taskId);

    // Find all tasks where the ID is in the extracted task IDs
    const allTasks = await Task.findAll({
      where: {
        id: taskIds,
      },
    });

    // Return the results in a JSON response
    return res.json({
      message: `Tasks assigned to ${req.user.lastName}`,
      allTasks,
    });
  } catch (error) {
    // If an error occurs, return a 404 error with the error message
    return next(new ErrorResponse(error, 404));
  }
};

module.exports = {
  addTaskToUser,
  NumberAllTaskOfProject,
  AllTaskOfUser,
  AllMyTasks,
  AllTaskOfProject,
};
