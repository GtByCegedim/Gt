const User = require("../models/user");
const Role = require("../models/role");
const mailer = require("../middleware/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
const Storage = require("local-storage");
const ErrorResponse = require('../utils/error');
// const user_roles = require("../models/index")

const AddEmployé = async (req, res,next) => {
  const { body } = req;
  if (!body.lastName || !body.email || !body.firstName) return next(new ErrorResponse('Fill all filled',401));
  else {
    const findUser = await User.findOne({
      where: { 
          email: body.email
      }
  })
    // console.log(findUser)
    if (findUser) return next(new ErrorResponse('il ya déja un Employé avec cet email',401));
    else {
      const stockPassword = Generate_password_secure.randomPassword({
        characters: [
          Generate_password_secure.lower,
          Generate_password_secure.upper,
          Generate_password_secure.digits,
        ],
      });
      const generatePassword = await bcrypt.hash(stockPassword, 10);
      // const role_User = await Role.findOne({ name: "Employe" });
      const creatUser = await User.create({
        ...body,
        password: generatePassword,
        // role_id: role_User._id,
      });
      if (!creatUser) return next(new ErrorResponse('error',401));
      Storage("stockPassword", stockPassword);
      mailer.main("AddEmployé", creatUser);
      await res.send(creatUser);
    }
  }
};



module.exports = AddEmployé

