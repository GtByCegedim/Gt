const Task = require('../models/task')
const User = require('../models/user')
const Project = require('../models/project')
const Subtask = require('../models/subtask')
const Task_statut = require('../models/task_statut')
const DateType = require('../models/dateType')
const TaskUser = require('../models/task_user')
const mailer = require("../middleware/mailer");
const Storage = require("local-storage");
const ErrorResponse = require('../utils/error')
const { Statut } = require('../models')

/**
 * It creates a task and adds it to the users
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 */
const addTaskToUser = async (req, res, next) => {
  const manager = req.user
  const {
    body
  } = req
  try {
    if (!body.title || !body.description || !body.deadline || !body.duration || !body.unit || !body.users) {
      console.log(body.users);
      return next(new ErrorResponse('Fill all filled and users', 401));
    } 
     /* Checking if the user exists in the database. */
      body.users.map(async (user) => {
        const findUserByName = await User.findOne({
          where: {
            lastName: user.lastname 
          }
        });
        if (!findUserByName) {
          return next(new ErrorResponse(`User  ${user.lastname} not found`, 401));
        }
      });
      const manager_id = manager.id
      const isManeger = await Project.findOne({
        where : {
          manager: manager_id
        }
      })
      if (!isManeger) {
        return next(new ErrorResponse('Sory You Are Not Manager Of this Project', 401));
      }
      /* It creates a date type. */
      const addDateType = await DateType.create({
        duration: body.duration,
        unit: body.unit
      })
      if (!addDateType) {
        return next(new ErrorResponse('Date Type Not created ', 401));
      }

      const project_id = req.params.id
      const id_dateType = addDateType.id
      /* It creates a task and adds it to the users */
      const creatTask = await Task.create({
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        dateTypeId: id_dateType,
        projectId: project_id,
        manager: manager_id
      })
      if (!creatTask) {
        return next(new ErrorResponse('Task not created', 401));
      }
     /* A loop that iterates over the users and creates a relation between the task and the users. */
      body.users.map(async (user) => {
        const name_luser = user.lastname
        const findUserByName = await User.findOne({
          where: {
            lastName: name_luser,
          }
        })
        if (!findUserByName) {
          return next(new ErrorResponse(`no user with this name  ${name_luser}`, 401));
        }
        const UserId = findUserByName.id
        const taskId = creatTask.id
        const creatUserTask = await TaskUser.create({
          userId: UserId,
          taskId: taskId
        })
        if (!creatUserTask) {
          return next(new ErrorResponse('no relation user with task', 401));
        }
        const addStatus = await Statut.create({
          status : "A faire"
        })
        if(!addStatus){
          return next(new ErrorResponse('statut not aded', 401));
        }
        const task_status = await Task_statut.create({
          taskId: creatTask.id,
          statusId : addStatus.id
        })
        if(!task_status){
          return next(new ErrorResponse('relation of statut not aded', 401));
        }
        Storage("creatTask", creatTask.title);
        Storage("createdAt", creatTask.createdAt);
        mailer.main("addTask", findUserByName);
      });
      await res.json({
        msg: "task added to users"
      });
    
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
}

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
const AllTaskOfProject = async (req, res, next) => {
  try {
    // Extract project ID from request parameters
    const projectId = req.params.id;

    // Query the database for tasks with a matching project ID
    const tasks = await Task.findAll({ where: { projectId } });

    // If no tasks are found, return a custom error response
    if (!tasks.length) {
      return next(new ErrorResponse("No tasks found for project", 404));
    }

    // Return a JSON response with the found tasks
    return res.status(200).json(tasks);
  } catch (error) {
    // Return a custom error response if an error occurs while querying the database
    return next(new ErrorResponse(`Error retrieving tasks: ${error.message}`, 500));
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
const AllTaskOfUser = async(req,res,next)=>{
  const lastName = req.body.lastName
  const firstName = req.body.firstName
  let taskIds = []
  try {
    const findUserByName = await User.findOne({
      where: {
        lastName : lastName,
        firstName:firstName
      }
    })
    if(!findUserByName) {
      return next(new ErrorResponse('no User found', 404));
    }
    const id_user = findUserByName.id
    const findTask = await TaskUser.findAll({
      where : {
        userId : id_user
      }
    })
    if(!findTask) {
      return next(new ErrorResponse('no task assigned in this User', 404));
    }
    findTask.forEach(task_user => {
      taskIds.push(task_user.dataValues.taskId);
    });
    let allTasks = [];
    for(let i = 0 ; i<taskIds.length;i++){
      const findAllTask = await Task.findAll({
        where : {
          id : taskIds[i]
        }
      })
      allTasks.push(findAllTask);
    }
    res.json(allTasks)

  } catch (error) {
    return next(new ErrorResponse(error, 404));
  }

}

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
    const taskUsers = await TaskUser.findAll({ where: { userId } });
    
    // If there are no tasks assigned to this user, return a 404 error
    if (!taskUsers.length) return next(new ErrorResponse('No tasks assigned to this user', 404));
    
    // Extract the task IDs from the task-user associations
    const taskIds = taskUsers.map(taskUser => taskUser.taskId);
    
    // Find all tasks where the ID is in the extracted task IDs
    const allTasks = await Task.findAll({ where: { id: taskIds } });
    
    // Return the results in a JSON response
    return res.json({
      message: `Tasks assigned to ${req.user.lastName}`,
      allTasks
    });
  } catch (error) {
    // If an error occurs, return a 404 error with the error message
    return next(new ErrorResponse(error, 404));
  }
};



module.exports = {
  addTaskToUser,
  AllTaskOfProject,
  AllTaskOfUser,
  AllMyTasks
}