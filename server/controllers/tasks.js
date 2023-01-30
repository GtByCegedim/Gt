const Task = require('../models/task')
const User = require('../models/user')
const Project = require('../models/project')
const status = require('../models/taskStatus')
const Subtask = require('../models/subtask')
const DateType = require('../models/dateType')
const TaskUser = require('../models/task_user')
const mailer = require("../middleware/mailer");
const Storage = require("local-storage");
const ErrorResponse = require('../utils/error')

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
    } else {
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
      /* It creates a date type. */
      const addDateType = await DateType.create({
        duration: body.duration,
        unit: body.unit
      })
      if (!addDateType) {
        return next(new ErrorResponse('Date Type Not created ', 401));
      }
      const manager_id = manager.id
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
        Storage("creatTask", creatTask.title);
        Storage("createdAt", creatTask.createdAt);
        mailer.main("addTask", findUserByName);
      });
      await res.json({
        msg: "task added to users"
      });
    }
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
}

/**
 * It finds all the tasks of a project by the project id
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that we call when we want to move on to the next middleware.
 */
const AllTaskOfProject = async(req,res,next)=>{
  const project_id = req.params.id
  try {
    const findAllTask = await Task.findAll({
      where : {
        projectId : project_id
      }
    })
    if(!findAllTask) {
      return next(new ErrorResponse('no task found', 404));
    }
    res.json(findAllTask)
  } catch (error) {
    return next(new ErrorResponse(error, 404));
  }
}

/**
 * It takes the lastName and firstName of a user and returns all the tasks assigned to him
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 * @returns All the tasks assigned to a user
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
module.exports = {
  addTaskToUser,
  AllTaskOfProject,
  AllTaskOfUser
  
}