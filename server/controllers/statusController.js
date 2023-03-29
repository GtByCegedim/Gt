const Statut = require("../models/status");
const Task = require("../models/task");
const Task_statut = require("../models/task_statut");
const Project = require("../models/project");
const ErrorResponse = require("../utils/error");
const mailer = require("../middleware/mailer");
const User = require("../models/user");
const Storage = require("local-storage");


// This function adds a new status to a project
const addNewStatut = async (req, res, next) => {
  const name = req.body.name;
  const manager = req.user;
  const project_id = req.params.id;
  try {
    if (!name) {
      return next(new ErrorResponse("fialled ad filled", 401));
    }
    // Get the manager ID
    const manager_id = manager.id;
    // Get the project with the specified ID
    const getProject = await Project.findOne({
      where: {
        id: project_id,
      },
    });
    // Check if the project exists
    if (!getProject) {
      // If not, throw an error
      return next(new ErrorResponse("Sory No Project Found", 401));
    }
    // Check if the manager is the manager of the project
    if (getProject.manager !== manager_id) {
      // If not, throw an error
      return next(
        new ErrorResponse("Sory You Are Not Manager Of this Project", 401)
      );
    } 
    const chekIsExist = await Statut.findOne({
      where: {
        status: name,
        project:getProject.id
      }
    })
    if (chekIsExist) return next(new ErrorResponse("Statut exist", 401));
    // Create the new status
    const NewStatut = await Statut.create({
      status: name,
      project: project_id
    });
    // Check if the status was created successfully
    if (!NewStatut) {
      // If not, throw an error
      return next(new ErrorResponse("Statut not created", 401));
    }
    // Return a success message
    res.json({
      messagme: `status created with name : ${NewStatut.status}`,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return next(new ErrorResponse(error, 404));
  }
};

const deleteStatus = async (req, res, next) => {
  const manager = req.user;
  // Get the project ID from the request params
  const project_id = req.params.idProject;
  try {
    // Check if the status field is present in the request body
    if (!body.status) {
      // If not, throw an error
      return next(new ErrorResponse("fialled ad filled", 401));
    }
    // Get the manager ID
    const manager_id = manager.id;
    // Get the project with the specified ID
    const getProject = await Project.findOne({
      where: {
        id: project_id,
      },
    });
    // Check if the project exists
    if (!getProject) {
      // If not, throw an error
      return next(new ErrorResponse("Sory No Project Found", 401));
    }
    if (getProject.manager !== manager_id) {
      // If not, throw an error
      return next(
        new ErrorResponse("Sory You Are Not Manager Of this Project", 401)
      );
    }
    const idStatut = req.params.idStatut;
    const deletStatut = await Statut.delete({
      id: idStatut,
    });
    if (!deletStatut) {
      return next(new ErrorResponse("Sory ", 401));
    }
    res.json({
      messagme: "statut deleted",
    });
  } catch {
    return next(new ErrorResponse(error, 401));
  }
};

const updateStatusOfTask = async (req, res, next) => {
  const task_id = req.params.id;
  const statut = req.body.statut;
  try {
    const findTask = await Task.findByPk(task_id);
    if (!findTask) {
      return next(new ErrorResponse("No task Found", 401));
    }
    const project_id = findTask.projectId
    console.log(project_id);
    const findStatut = await Statut.findOne({
      where: {
        status: statut,
        project: project_id
      },
    });
    if (!findStatut) {
      return next(new ErrorResponse(" Statut not  found in this Project", 401));
    }
    const statutId = findStatut.id
    console.log(statutId);
    const update = await Task.update({
      status: statutId
    }, {
      where: {
       
        id:task_id
      }
    })
    if(!update)  return next(new ErrorResponse("Not updeted task", 401));
    const manager_id = findTask.manager;
    const manager = await User.findByPk(manager_id)
    if(!manager)   return next(new ErrorResponse("no manaer exist in this task !!!!!!!!", 404));
    Storage("taskName", findTask.title);
    Storage("statut", findStatut.status);
    mailer.main("updateTask", manager);
    res.json({
      message: `New Status of task ${findTask.title}  :  ${statut}`,
    });
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
};

const getStatutOfProject = async (req, res, next) => {
  try {
    const project_id = req.params.id;
    const findProject = await Project.findByPk(project_id)
    if (!findProject) return next(new apiError("no project found with this id", 404));
    const findStatutOfProject = await Statut.findAll({
      where: {
        project: project_id
      }
    })
    if (findStatutOfProject.length == 0) return next(new ErrorResponse("No statuts found", 404));
    res.json({
      message: `Statuts of project ${findProject.name}`,
      findStatutOfProject
    })
  } catch (error) {
    return next(new ErrorResponse(error, 500));
  }
}
module.exports = {
  addNewStatut,
  deleteStatus,
  updateStatusOfTask,
  getStatutOfProject
};