const User = require("../models/user");
const Role = require("../models/role");
const mailer = require("../middleware/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
const Storage = require("local-storage");
const ErrorResponse = require('../utils/error');
const User_role = require('../models/user-role')

/**                 AJOUTER UN EMPLOYE
 * It creates a user, then creates a role_user, then sends an email.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function is used to pass control to the next matching route.
 * @returns The user object.
 */
const AddEmployé = async (req, res, next) => {
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
      return next(new ErrorResponse('il ya déja un Employé avec cet email', 401));
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
        return next(new ErrorResponse('user non creer ', 401));
      } else {
        const role_id = role.id;
        const user_id = creatUser.id
        const role_user = await User_role.create({
          userId: user_id,
          roleId: role_id
        })
        if (!role_user) return next(new ErrorResponse('role_user non creer', 401));
        Storage("stockPassword", stockPassword);
        mailer.main("AddEmployé", creatUser);
        await res.send(creatUser);
      }
    }
  }
};




module.exports = AddEmployé