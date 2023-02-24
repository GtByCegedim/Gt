const User = require('../models/user')
const jwt = require('jsonwebtoken')
const User_role = require('../models/user-role')
const Role = require("../models/role");
const ErrorResponse = require('../utils/error');
const Project = require('../models/project');

/**
 * It checks if the request has a token, if it does, it verifies it and attaches the user to the
 * request object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 */
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


/**
 * It checks if the user is an admin or not.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 * @returns The function isAdmin is being returned.
 */
const isAdmin = async(req,res,next)=> {
    const user_id = req.user.id
    if(!req.user){
        return next(new ErrorResponse('Not User Found, Please Login again', 401));
    }
    try {
        if(!user_id){
        return next(new ErrorResponse('Not User Found, Please Login again', 401));
        }
        const findUserRole = await User_role.findOne({
            where : {
                userId : user_id
            }
        })
        if(!findUserRole){
            return next(new ErrorResponse('Not Role have this  User, Please Login again', 401));
            }
        const role_id  = findUserRole.roleId
        const findRole = await Role.findByPk(role_id)
        console.log(findRole.name)
        if(!findRole){
            return next(new ErrorResponse('Not Role have this  User, Please Login again', 401));
            }
        else if(findRole.name !== "admin"){
            return next(new ErrorResponse('Sorry You are Not Admin', 401));
        }
        else{
            next()
        }
    } catch (error) {
        return next(new ErrorResponse(error, 401));
    }
}



module.exports = {
    authMiddleware,
    isAdmin,
    
}