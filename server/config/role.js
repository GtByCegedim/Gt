const Sequelize = require('sequelize')
const Role = require('../models/role')

const createRole = async () => {
  const adminRole = await Role.findOne({
    where: {
      name: 'admin'
    }
  });
  if (!adminRole) {
    await Role.create({
      name: 'admin'
    });
    console.log("admin role created successfully")
  } else {
    console.log("admin role already exist")
  }

  const employeRole = await Role.findOne({
    where: {
      name: 'employe'
    }
  });
  if (!employeRole) {
    await Role.create({
      name: 'employe'
    });
    console.log("employe role created successfully")
  } else {
    console.log("employe role already exist")
  }
  const roles = ['admin', 'employe'];
  roles.forEach(async role => {
    const existingRole = await Role.findOne({
      where: {
        name: role
      }
    });
    if (!existingRole) {
      await Role.create({
        name: role
      });
      console.log(`${role} role created successfully`)
    } else {
      console.log(`${role} role already exist`)
    }
  });

}

module.exports = createRole