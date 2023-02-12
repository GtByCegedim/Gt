const Project = require('../models/project.js');
const apiError = require('../utils/error.js');

exports.createProject = async (req, res) => {
    const manager_id = req.user.id
    try {
        const { name, description ,deadline } = req.body;
        const project = await Project.create({
            name,
            description,
            deadline,
            manager : manager_id
        });
        if(!project){
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
