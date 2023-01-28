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
      // for (let i = 0; i < body.users.length; i++) {
      //   const findUserByName = await User.findOne({
      //     where: {
      //       lastName: body.users[i].lastname,

      //     }
      //   });
      //   if (!findUserByName) {
      //     return next(new ErrorResponse(`User  ${body.users[i].lastname} not found`, 401));
      //   }
      // }
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




module.exports = {
  addTaskToUser
}