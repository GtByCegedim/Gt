const Project = require("../models/project.js");
const apiError = require("../utils/error.js");
const projctUsers = require("../models/project_user");
const User = require("../models/user.js");

/* This function is used to create a project and add it to the database */
exports.createProject = async (req, res, next) => {
  const manager = req.user;
  if (!manager) {
    return next(new apiError("no manager Found", 404));
  }
  try {
    const {
      name,
      description,
      deadline
    } = req.body;
    const findProjectByName = await Project.findOne({
      where: {
        name: name,
      },
    });
    if (findProjectByName) {
      return next(new apiError("enter another project's Name", 400));
    }
    const manager_id = manager.id;
    const project = await Project.create({
      name,
      description,
      deadline,
      manager: manager_id,
      bane: false,
    });
    if (!project) {
      return next(new apiError("Error creating project", 401));
    }
    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.log(error);
    return next(new apiError(error, 500));
  }
};

exports.UpdateProject = async (req, res, next) => {
  const project_id = req.params.id;
  const manager_id = req.user.id;
  const {
    name,
    description,
    deadline
  } = req.body;

  try {
    const findProjectByName = await Project.findOne({
      where: {
        name: name,
      },
    });
    if (findProjectByName) {
      return next(
        new apiError(
          "There is already a project with the same name ! Please choose another name :)",
          400
        )
      );
    }
    const checkProject = await Project.findOne({
      where: {
        id: project_id,
      },
    });
    if (!checkProject) {
      return next(new apiError("No project was found", 400));
    }
    if (manager_id != checkProject.manager) {
      return next(
        new apiError("Sorry, You are not the manager of this Project", 400)
      );
    }
    const UpdateProject = await Project.update({
      name,
      description,
      deadline,
    }, {
      where: {
        id: project_id,
      },
    });
    if (!UpdateProject) {
      return next(new apiError("Error Updating project", 404));
    }
    res.json({
      message: "Project was updated succesfully",
    });
  } catch (error) {
    return next(new apiError(error, 500));
  }
};

/* This function is used to find all projects that are not banned. */
exports.findALLprojects = async (req, res, next) => {
  try {
    const getProjects = await Project.findAll({
      where: {
        bane: false
      }
    });
    if (getProjects.length == 0) {
      return next(new apiError("No project found", 404));
    }
    res.json(getProjects);
  } catch (error) {
    return next(new apiError(error, 500));
  }
};

/* The above code is a function that is used to get all the projects that are created by the manager. */
exports.OnlyMyProjects = async (req, res, next) => {
  const manager_id = req.user.id;
  try {
    const getMyProjects = await Project.findAll({
      where: {
        manager: manager_id,
        bane: false,
      },
    });
    if (getMyProjects.length == 0) {
      return next(new apiError("No project found", 404));
    }
    res.json(getMyProjects);
  } catch (error) {
    return next(new apiError(error, 500));
  }
};

/* This function is used to get a project by its id. */
exports.getOneProject = async (req, res, next) => {
  const project_id = req.params.id;
  try {
    const getMyProject = await Project.findByPk(project_id)
    if (!getMyProject) {
      return next(new apiError("No project found", 404));
    }
    if (getMyProject.bane != false) {
      return next(new apiError("project bloqued", 400));
    }
    res.json({
      message: `project by id : ${project_id}`,
      getMyProject
    });
  } catch (error) {
    return next(new apiError(error, 500));
  }
};


/* This function is used to get all the projects that are banned. */
exports.getProjectsBanned = async (req, res, next) => {
  try {
    const findAllProjects = await Project.findAll({
      where: {
        bane: true
      }
    })
    if (findAllProjects.length == 0) {
      return next(new apiError("No project deleted", 400));
    }
    res.json({
      message: `All Project deleted `,
      findAllProjects
    })
  } catch (error) {
    return next(new apiError(error, 500));
  }
}


/* This function is used to ban a project. */
exports.baneProject = async (req, res, next) => {
  const project_id = req.params.id;
  const manager_id = req.user.id;
  try {
    const findProject = await Project.findByPk(project_id);
    if (!findProject) {
      return next(new apiError("No project have this Id ", 404));
    }
    if (manager_id != findProject.manager) {
      return next(new apiError("You are not manager ", 500));
    }
    const baneProject = await Project.update({
      bane: true,
    }, {
      where: {
        id: project_id,
      },
    });
    if (!baneProject) {
      return next(new apiError("Projet not banned", 400));
    }
    res.json({
      message: "projet est banné",
    });
  } catch (error) {
    return next(new apiError(error, 500));
  }
};


/* This function is used to delete a project. */
exports.deleteProject = async (req, res, next) => {
  const project_id = req.params.id;
  try {
    const findProject = await Project.findOne({
      where: {
        id: project_id
      }
    })
    if (!findProject) {
      return next(new apiError("project not found", 400));
    }
    const deleted = await findProject.destroy();
    console.log(deleted);
    res.json({
      message: `Project deleted`
    })
  } catch (error) {
    return next(new apiError(error, 500));
  }
}