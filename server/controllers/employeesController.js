const User = require("../models/user");
const Role = require("../models/role");
const mailer = require("../middleware/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
const Storage = require("local-storage");
const ErrorResponse = require('../utils/error');
const User_role = require('../models/user-role');

/**                  Add an employee

 * It creates a user, then creates a role_user, then sends an email.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function is used to pass control to the next matching route.
 * @returns The user object.
 */
const AddEmployee = async (req, res, next) => {
  const {
    body
  } = req;
  if (!body.lastName || !body.email || !body.firstName) {
    return next(new ErrorResponse('Fill all filled', 401));
  } else {
    const findUser = await User.findOne({
      where: {
        email: body.email
      }
    })
    if (findUser) { 
      return next(new ErrorResponse('an employee with the provided email is already exist ', 401));
    } else {
      const stockPassword = Generate_password_secure.randomPassword({
        characters: [
          Generate_password_secure.lower,
          Generate_password_secure.upper,
          Generate_password_secure.digits,
        ],
      });
      const generatePassword = await bcrypt.hash(stockPassword, 10);
      const role = await Role.findOne({
        where: {
          name: "employe"
        }
      });
      const creatUser = await User.create({
        ...body,
        password: generatePassword,
      });
      if (!creatUser) {
        return next(new ErrorResponse('unexpected issue while creating user', 401));
      } 
      
      const role_id = role.id;
      const user_id = creatUser.id
      const role_user = await User_role.create({
        userId: user_id,
        roleId: role_id
      })
      if (!role_user) return next(new ErrorResponse('unexpected issue while creating role', 401));
      Storage("stockPassword", stockPassword);
      mailer.main("AddEmployé", creatUser);
      await res.json(creatUser);
    }
  }
};

/**                 MODIFIER UN UTULISATEUR
 * It updates the user's information and sends an email to the user.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 * @returns The user object
 */
const updateUser = async(req,res,next)=>{
  const {
    body
  } = req;
  const user_id =req.params.id
  try {
    if (!body.lastName || !body.email || !body.firstName) {
      return next(new ErrorResponse('all fields required', 400));
    } 
      const update_User = await User.update({
        lastName:body.lastName,
        firstName:body.firstName,
        email:body.email
      },{
        where: { id: user_id }
      })
      if(!update_User) return next(new ErrorResponse('unexpected error during user update'))
      const findUser = await User.findOne({
        where: {id : user_id}
     })
      if(!findUser) {
        return next(new ErrorResponse(`No use found with the id:  ${user_id}`, 404));
      }
      mailer.main("UpdateUser", findUser);
      res.json(findUser)
  } catch (error) {
      return next(new ErrorResponse(error, 401));
  }
}

/**                 SUPPRIMER UN UTULISATEUR
 * It deletes a user from the database.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when your middleware is complete.
 * @returns The user is deleted from the database.
 */
const deleteUser = async(req,res,next)=>{
  const user_id = req.params.id;
  try {
    const delete_User = await User.destroy({
      where: {
       id: user_id
      }
    });
    if(delete_User) {
      res.json({
        message: "user deleted successfully",
        status:200
      })
    }
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
}

/**                 AFFICHIER LES UTULISATEUR
 * It's a function that finds all users in the database and returns them in a json format.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when your middleware is complete. It passes control
 * to the next middleware function in line.
 */
const findAllUsers = async(req,res,next)=>{
  try {
    const findUsers = await User.findAll()
    res.json(findUsers)
  } catch (error) {
    next(new ErrorResponse(error, 401));
  }
}




module.exports = {
  AddEmployee,
  updateUser,
  deleteUser,
  findAllUsers,
}
