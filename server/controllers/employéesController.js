const User = require("../models/user");
const Role = require("../models/role");
const mailer = require("../middleware/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
const Storage = require("local-storage");
const ErrorResponse = require("../utils/error");
const User_role = require("../models/user-role");

/**                  Add an employee

 * It creates a user, then creates a role_user, then sends an email.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function is used to pass control to the next matching route.
 * @returns The user object.
 */
const AddEmployee = async (req, res, next) => {
  const { lastName, firstName, email } = req.body;
  if (!lastName || !email || !firstName) {
    return next(new ErrorResponse("Fill all filled", 401));
  } else {
    const findUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return next(
        new ErrorResponse(
          "an employee with the provided email is already exist ",
          401
        )
      );
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
          name: "employe",
        },
      });
      const creatUser = await User.create({
        ...req.body,
        password: generatePassword,
      });
      if (!creatUser) {
        return next(
          new ErrorResponse("unexpected issue while creating user", 401)
        );
      }
      const role_id = role.id;

      const user_id = creatUser.id;
      const role_user = await User_role.create({
        userId: user_id,
        roleId: role_id,
      });
      if (!role_user)
        return next(
          new ErrorResponse("unexpected issue while creating role", 401)
        );
      Storage("stockPassword", stockPassword);
      try {
        mailer.main("AddEmployé", creatUser);
      } catch (error) {
        console.log(error);
      }

      await res.json(creatUser);
    }
  }
};

const sendPassword = async (req, res, next) => {
  const id = req.params.id;
  const { oldPassword, Password } = req.body;
  try {
    // find the user by email
    const user = await User.findByPk(id);

    if (!user) {
      return next(new ErrorResponse(" user not found", 400));
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return next(new ErrorResponse("mot de passe non correct", 400));
    console.log();
    // Create a new password
    const newPsw = Password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPsw, salt);
    // update the user's password in the database
    await user.update({
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      message: "Password create successfully",
    });
  } catch (error) {
    return next(new ErrorResponse("Inv token or user not found", 400));
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
const updateUser = async (req, res, next) => {
  const { lastName, firstName, email } = req.body;
  const user_id = req.params.id;
  try {
    if (!lastName || !email || !firstName) {
      return next(new ErrorResponse("all fields required", 400));
    }
    const update_User = await User.update(
      {
        lastName: lastName,
        firstName: firstName,
        email: email,
      },
      {
        where: {
          id: user_id,
        },
      }
    );
    if (!update_User)
      return next(new ErrorResponse("unexpected error during user update"));
    const findUser = await User.findOne({
      where: {
        id: user_id,
      },
    });
    if (!findUser) {
      return next(
        new ErrorResponse(`No use found with the id:  ${user_id}`, 404)
      );
    }
    mailer.main("UpdateUser", findUser);
    res.json(findUser);
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
};

/**                 SUPPRIMER UN UTULISATEUR
 * It deletes a user from the database.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when your middleware is complete.
 * @returns The user is deleted from the database.
 */
const deleteUser = async (req, res, next) => {
  const user_id = req.params.id;
  try {
    const delete_User = await User.destroy({
      where: {
        id: user_id,
      },
    });
    if (delete_User) {
      res.json({
        message: "user deleted successfully",
        status: 200,
      });
    }
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
};

/**                 AFFICHIER LES UTULISATEUR
 * It's a function that finds all users in the database and returns them in a json format.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when your middleware is complete. It passes control
 * to the next middleware function in line.
 */
const findAllUsers = async (req, res, next) => {
  try {
    const findUsers = await User.findAll();
    res.json(findUsers);
  } catch (error) {
    next(new ErrorResponse(error, 401));
  }
};
const findUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
const getCurrentUser = async (req, res, next) => {
  const user_id = req.user.id;
  try {
    const user = await User.findOne({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    res.json(user);
  } catch (error) {
    return next(new ErrorResponse(error, 401));
  }
};

module.exports = {
  AddEmployee,
  updateUser,
  deleteUser,
  findAllUsers,
  sendPassword,
  getCurrentUser,
  findUserById,
};
