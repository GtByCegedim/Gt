const User = require('../models/user')
const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization.split(" ")[1]
        try {
            if(token){
                const decode = jwt.verify(token,process.env.SECRET_TOCKEN) 
                const user = await User.findByPk(decode?._id)
                req.user= user ;
                console.log(req.user)
                next()
            }
        } catch (error) {
            throw new Error ("Not Aithorized token expired, Please Login again")
        }
    }else{
        throw new Error("il y a aucune token attacher au header")
    }
}
module.exports = {
    authMiddleware
}