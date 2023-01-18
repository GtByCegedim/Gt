const Project = require('../models/project.js');
const Team = require('../models/team');
const apiError = require('../utils/error.js');

exports.createProject = async (req, res) => {
    try {
        const { name, description, groupId } = req.body;
        const project = await Project.create({
            name,
            description
        });

        const team = await Team.findByPk(teamId);
        await project.setGroup(team);

        res.status(201).json({
            message: "Project created successfully",
            project
        });
    } catch (error) {
        console.log(error);
        return next(new apiError("Error creating project", 500))
    }
};
