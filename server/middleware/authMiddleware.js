const User = require('../models/user')
const jwt = require('jsonwebtoken')
const ErrorResponse = require('../utils/error')
const authMiddleware = async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization.split(" ")[1]
        try {
            if(token){
                const decode = jwt.verify(token,process.env.JWT_SECRET) 
                const user = await User.findByPk(decode?.id)
                req.user= user ;
                next()
            }
        } catch (error) {
             return next(new ErrorResponse('Not Aithorized token expired, Please Login again', 401));
        }
    }else{
       return   next(new ErrorResponse('il y a aucune token attacher au header', 401));    }
}
module.exports = {
    authMiddleware
}