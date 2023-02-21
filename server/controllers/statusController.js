
const Statut = require('../models/status')
const Task = require('../models/task')
const Task_statut = require('../models/task_statut')
const Project = require('../models/project')
const ErrorResponse = require('../utils/error');


// This function adds a new status to a project
const addNewStatut = async(req,res,next) => {
    // Retrieve the request body
   const name = req.body.name
    // Get the manager from the request user object
    const manager = req.user
    // Get the project ID from the request params
    const project_id = req.params.id
    try {
        // Check if the status field is present in the request body
        if(!name){
            // If not, throw an error
            return next(new ErrorResponse('fialled ad filled', 401));
        }
        // Get the manager ID
        const manager_id = manager.id
        // Get the project with the specified ID
        const getProject = await Project.findOne({
            where : {
              id: project_id
            }
          })
          // Check if the project exists
          if (!getProject) {
            // If not, throw an error
            return next(new ErrorResponse('Sory No Project Found', 401));
          }
          // Check if the manager is the manager of the project
          if(getProject.manager !== manager_id){
            // If not, throw an error
            return next(new ErrorResponse('Sory You Are Not Manager Of this Project', 401));
          }
          // Create the new status
          const NewStatut = await Statut.create({
            status : name
          })
          // Check if the status was created successfully
          if(!NewStatut) {
            // If not, throw an error
            return next(new ErrorResponse('Statut not created', 401));
          }
          // Return a success message
          res.json({
            messagme : `status created with name : ${NewStatut.status}`,
          })
    } catch (error) {
        // Handle any errors that occur during the process
        return next(new ErrorResponse(error, 404));

    }
}

const deletStatus = async(req,res,next)=>{
    const manager = req.user
    // Get the project ID from the request params
    const project_id = req.params.idProject
    try {
        // Check if the status field is present in the request body
        if(!body.status){
            // If not, throw an error
            return next(new ErrorResponse('fialled ad filled', 401));
        }
        // Get the manager ID
        const manager_id = manager.id
        // Get the project with the specified ID
        const getProject = await Project.findOne({
            where : {
              id: project_id
            }
          })
          // Check if the project exists
          if (!getProject) {
            // If not, throw an error
            return next(new ErrorResponse('Sory No Project Found', 401));
        }
          if(getProject.manager !== manager_id){
                // If not, throw an error
                return next(new ErrorResponse('Sory You Are Not Manager Of this Project', 401));
        }
        const idStatut = req.params.idStatut
        const deletStatut = await Statut.delete({
            id : idStatut
        })
        if(!deletStatut){
            return next(new ErrorResponse('Sory ', 401));
        }
        res.json({
            messagme : "statut deleted"
        })
    } catch{
        return next(new ErrorResponse(error, 401));
    }

}

const updateStatusOfTask = async(req,res,next) =>{
    const task_id = req.params.id
    const statut = req.body.statut
    try {
        const findTask = await Task.findByPk(task_id)
        if(!findTask){
            return next(new ErrorResponse("No task Found", 401));
        }
        const findStatut = await Statut.findOrCreate({
            where : {
                status : statut
            }
        })
        console.log(findStatut[0].id)
        if(!findStatut){
            return next(new ErrorResponse('No task found or create', 401));
        }
        const task_Status = await  Task_statut.update({
            statusId : findStatut[0].id
        },
        {
            where : {
                taskId : task_id
            }
        })
        if(!task_Status){
            return next(new ErrorResponse('No relation', 401));
        }
        res.json({
            message : `New Status of task ${findTask.title}  :  ${statut}`
        })
    } catch (error) {
        return next(new ErrorResponse(error, 401));
    }
}


module.exports = {
    addNewStatut,
    deletStatus,
    updateStatusOfTask
}