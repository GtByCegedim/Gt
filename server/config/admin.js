const Sequelize = require('sequelize')
const User = require('../models/user')
const bcrypt = require('bcryptjs');

const createAdmin = () => {
  User.findOne({
      where: {
        email: process.env.EMAIL
      }
    })
    .then(adminUser => {
      if (!adminUser) {
        // Create the admin user
        bcrypt.hash(process.env.PASSWORD, 10).then(hashedPassword => {
          User.create({
              email: process.env.EMAIL,
              password: hashedPassword,
              firstName: process.env.FIRST_NAME,
              lastName: process.env.LAST_NAME,
              isAdmin: true
            })
            .then(admin => {
              console.log('Admin user created successfully:', admin);
            })
            .catch(error => {
              console.error('Error creating admin user:', error);
            });
        });
      } else {
        console.log('Admin user already exists');
      }
    })
    .catch(error => {
      console.error('Error finding admin user:', error);
    });
}

module.exports = createAdmin;