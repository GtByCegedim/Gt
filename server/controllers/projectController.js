const Project = require('../models/project.js');
const apiError = require('../utils/error.js');
const projctUsers = require('../models/project_user');
const User = require('../models/user.js');

exports.createProject = async (req, res, next) => {
    const manager_id = req.user.id
    try {
        const {
            name,
            description,
            deadline
        } = req.body;
        const findProjectByName = await Project.findOne({
            where: {
                name: name
            }
        })
        if (findProjectByName) {
            return next(new apiError("plez enter Name project again", 500))
        }
        const project = await Project.create({
            name,
            description,
            deadline,
            manager: manager_id
        });
        if (!project) {
            return next(new apiError("Error creating project", 500))
        }
        res.status(201).json({
            message: "Project created successfully",
            project
        });
    } catch (error) {
        console.log(error);
        return next(new apiError(error, 500))
    }
};

exports.UpdateProject = async (req, res, next) => {
    const project_id = req.params.id
    const manager_id = req.user.id
    const ids = []
    const {
        name,
        description,
        deadline
    } = req.body
    try {
        const findProjectByName = await Project.findOne({
            where: {
                name: name
            }
        })
        if (findProjectByName) {
            return next(new apiError("plez enter Name project again", 500))
        }
        const chackProject = await Project.findOne({
            where: {
                id: project_id
            }
        })
        if (!chackProject) {
            return next(new apiError("no project found", 400))

        }
        if (manager_id != chackProject.manager) {
            return next(new apiError("Sorry , You are Not manager Of this Project", 400))
        }
        const UpdateProject = await Project.update({
            name,
            description,
            deadline
        }, {
            where: {
                id: project_id
            }
        })
        if (!UpdateProject) {
            return next(new apiError("Error Updating project", 500))
        }
        const findUser = await projctUsers.findAll({
            where : {
                projectId : project_id
            }
        })
        if(findUser){
           console.log(findUser);
        }
        res.json({
            message : "Project Updating",
            
        })
    } catch (error) {
        return next(new apiError(error, 500))

    }
}