const Sequelize = require('sequelize')
const User = require('../models/user')
const User_role = require('../models/user-role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const apiError = require('../utils/error');


const login = async (req, res, next) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ where: { email } });
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
  }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    success: true,
    token,
  });
};


module.exports = {
  login
}