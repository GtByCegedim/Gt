const Subtask = require("../models/subtask");
const Task = require("../models/task");
const User = require("../models/user");
const DateType = require("../models/dateType");
const ErrorResponse = require("../utils/error");

/**
 * It creates a subtask for a task
 * @param req - task_id , title , description , dateType , lasname and firstname of User
 * @param res - the response object
 * @param next - is a function that you call to pass control to the next matching route.
 * @returns a message
 * @permission Only (manager)
 */
const addSubTask = async (req, res, next) => {
  const task_id = req.params.id;
  const { body } = req;

  try {
    if (
      !body.title ||
      !body.description ||
      !body.duration ||
      !body.unit ||
      !body.lastname ||
      !body.firstName
    ) {
      return next(
        new ErrorResponse("Please fill all fields: title, description, duration, unit, lastname, and firstName", 401)
      );
    }

    const findUserByName = await User.findOne({
      where: {
        lastName: body.lastname,
        firstName: body.firstName
      }
    });
    if (!findUserByName) {
      return next(new ErrorResponse(`User ${body.lastname} not found`, 401));
    }

    const addDateType = await DateType.create({
      duration: body.duration,
      unit: body.unit
    });

    if (!addDateType) {
      return next(new ErrorResponse("Date Type not created", 401));
    }

    const findTask = await Task.findByPk(task_id);
    if (!findTask) {
      return next(new ErrorResponse("Task not found", 404));
    }

    const createSubTask = await Subtask.create({
      name: body.title,
      description: body.description,
      user: findUserByName.id,
      taskId: task_id,
      dateTypeId: addDateType.id
    });

    if (!createSubTask) {
      return next(new ErrorResponse("Subtask not created", 404));
    }

    res.json({
      message: "tache created"
    });
  } catch (error) {
    return next(new ErrorResponse(error, 400));
  }
};


/**
 * It gets all the subtasks of a task by task id.
 * @param req - task_id .
 * @param res - The response object(allTasks).
 * @param next - This is a function that you call when your middleware is complete.
 * @permission (only user connected and manager and admin)
 */
const getSubTaskOfTask = async (req, res, next) => {
  try {
    const task_id = req.params.id
    const task = await Task.findByPk(task_id);
    if (!task) throw new ErrorResponse('No task found', 401);

    const subtasks = await Subtask.findAll({
      where: { taskId: task_id },
    });
    if (!subtasks.length) throw new ErrorResponse('No Subtask found', 401);

    res.json({
      message: `SubTask Of task: ${task.title}`,
      subtasks,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  addSubTask,
  getSubTaskOfTask
};
