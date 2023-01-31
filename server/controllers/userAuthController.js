const Sequelize = require('sequelize')
const User = require('../models/user')
const User_role = require('../models/user-role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const apiError = require('../utils/error');
const mailer = require('../middleware/mailer');


const login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  // Find the user by email
  const user = await User.findOne({
    where: {
      email
    }
  });
  console.log(user)
  if (!user) {
    return next(new apiError('Invalid credentials', 401));
  }

  // Compare the provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new apiError('Invalid credentials', 401));
  }

  // Create a JWT
  const token = jwt.sign({
    id: user.id,
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.status(200).json({
    success: true,
    token,
  });
};

const forgetPassword = async (req, res, next) => {
  const {
    email
  } = req.body;
  if (!email) {
    return next(new apiError('Veuillez entrer votre email', 400))
  }
  // Find the user by email
  const user = await User.findOne({
    where: {
      email
    }
  });
  if (!user) {
    return next(new apiError('User not found', 404));
  }

  // Send the reset password link to the user via email
  mailer.main("forgetPassword", user);
  res.status(200).json({
    success: true,
    message: 'Reset password link sent'
  });
};

const resetPassword = async (req, res, next) => {
  const token = req.params.token;
  try {
    //decode the token
    const decoded = jwt.verify(token, process.env.SECRET_TOCKEN);
    // find the user by email
    const user = await User.findOne({
      where: {
        email: decoded.email
      }
    });
    if (!user) {
      return next(new apiError('Invalid token or user not found', 400));
    }
    // Create a new password
    const newPsw = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPsw, salt)
    // update the user's password in the database
    await user.update({
      password: hashedPassword
    });
    res.status(200).json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (error) {
    return next(new apiError('Invalid token or user not found', 400));
  }
};



module.exports = {
  login,
  forgetPassword,
  resetPassword
}