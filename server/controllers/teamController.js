const Team = require('../models/team')
const ErrorResponse = require('../utils/error');

const findAllTeams = async(req,res,next)=>{
    try {
        const findAllTeam = await Team.findAll()
        if(!findAllTeam) {
            next(new ErrorResponse("filled to feiled ", 401));
        }        
        res.json(findAllTeam)
    } catch (error) {
        next(new ErrorResponse(error, 401));
    }    
}

module.exports = {
findAllTeams
}