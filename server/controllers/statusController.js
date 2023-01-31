
const Statut = require('../models/status')


// This function adds a new status to a project
const addNewStatut = async(res,req,next) => {
    // Retrieve the request body
    const req = {
        body
    }
    // Get the manager from the request user object
    const manager = req.user
    // Get the project ID from the request params
    const project_id = req.params.id
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
          // Check if the manager is the manager of the project
          if(getProject.manager !== manager_id){
            // If not, throw an error
            return next(new ErrorResponse('Sory You Are Not Manager Of this Project', 401));
          }
          // Create the new status
          const NewStatut = await Statut.create({
            status : body.status
          })
          // Check if the status was created successfully
          if(NewStatut) {
            // If not, throw an error
            return next(new ErrorResponse('Statut not created', 401));
          }
          // Return a success message
          res.json({
            messagme : `status created with name : ${NewStatut.status}`,
          })
    } catch (error) {
        // Handle any errors that occur during the process
        return next(new ErrorResponse("No tasks found for project", 404));

    }
}



module.exports = {
    addNewStatut,
    deletStatus
}