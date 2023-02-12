const Sequelize = require('sequelize')
const User = require('../models/user')
const Role = require("../models/role")
const UserRole = require('../models/user-role')
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
              let {
                id: userId
              } = admin
              Role.findOne({
                where: {
                  name: 'admin'
                }
              }).then((role) => {
                let {
                  id: roleId
                } = role

                UserRole.create({
                  userId,
                  roleId
                }).then(() => console.log('everything created successfully'))
              })
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