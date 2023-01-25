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

const addTaskToUser = async(req,res,next) =>{
  const {body} = req
  try {
    if (!body.title || !body.description || !body.deadline || !body.duration || !body.unit) {
      return next(new ErrorResponse('Fill all filled', 401));
    }else {
      const addDateType = await DateType.create({
        duration : body.duration,
        unit : body.unit
      })
      if(!addDateType) {
        return next(new ErrorResponse('Date Type Not created ', 401));
      }
      const project_id = req.params.id
      const id_dateType =  addDateType.id
      const creatTask = await Task.create({
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        dateTypeId:  id_dateType,
        projectId: project_id
      })
      if(!creatTask) {
        return next(new ErrorResponse('Task not created', 401));
      }
      const name_user = body.user_name
      const findUserByName = await User.findOne({
        name : name_user
      })
      if(!findUserByName) {
        return next(new ErrorResponse('no user with this name', 401));
      }
      const UserId = findUserByName.id
      const taskId = creatTask.id
      const creatUserTask = await TaskUser.create({
          userId : UserId,
          taskId: taskId
      })
      if(!creatUserTask) {
        return next(new ErrorResponse('no relation user with task', 401));
      }
      console.log(creatTask.title)
      Storage("creatTask", creatTask.title);
      Storage("createdAt", creatTask.createdAt);
      mailer.main("addTask", findUserByName);
      await res.json(findUserByName);   
     } 
  } catch (error) {
      return next(new ErrorResponse(error, 401));
  }
}





module.exports = {
  addTaskToUser
}