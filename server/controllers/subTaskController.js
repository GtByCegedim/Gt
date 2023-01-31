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
 * Get all subtasks for a given task
 * @route GET /api/tasks/:id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Array} subtasks - Array of subtask objects
 * @throws {ErrorResponse} If task or subtasks are not found
 */
const getSubTaskOfTask = async (req, res, next) => {
  try {
    // Get task ID from request params
    const taskId = req.params.id;

    // Find the task with the given ID
    const task = await Task.findByPk(taskId);
    if (!task) throw new ErrorResponse('Task not found', 401);

    // Find all subtasks for the task
    const subtasks = await Subtask.findAll({
      where: { taskId },
    });
    if (!subtasks.length) throw new ErrorResponse('No subtasks found', 401);

    // Send success response with subtasks
    res.json({
      message: `Subtasks for task: ${task.title}`,
      subtasks,
    });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
};


/**
 * Get Sub Tasks for a user
 * @route GET /subtasks/
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Array} subTasks - Array of sub tasks for the user
 */
const getMySubTasks = async (req, res, next) => {
  try {
    // Get user ID from request object
    const userId = req.user.id;
  
    // Find all sub tasks for the user
    const subTasks = await Subtask.findAll({
      where: { user: userId },
    });
  
    // Check if any sub tasks were found
    if (!subTasks.length) {
      return next(
        new ErrorResponse(`No sub tasks found for user with ID: ${userId}`, 404)
      );
    }
  
    // Return sub tasks to the user
    return res.json({
      message: `All sub tasks for user ${req.user.lastName}`,
      subTasks,
    });
  } catch (error) {
    return next(new ErrorResponse(error, 400));
  }
};



module.exports = {
  addSubTask,
  getSubTaskOfTask,
  getMySubTasks
};
