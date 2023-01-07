const DateType = require('./dateType');
const Notification = require('./notification');
const User = require('./user');
const Role = require('./role');
const Policy = require('./policy');
const Task = require('./task');
const Subtask = require('./subtask');
const TaskStatus = require('./taskStatus');


// Many-to-many relationship between User and Role
User.belongsToMany(Role, { through: 'user_roles' });
Role.belongsToMany(User, { through: 'user_roles' });

// Many-to-many relationship between Role and Policy
Role.belongsToMany(Policy, { through: 'role_policies' });
Policy.belongsToMany(Role, { through: 'role_policies' });

// One-to-many relationship between Task and Subtask
Task.hasMany(Subtask, { foreignKey: 'taskId' });
Subtask.belongsTo(Task, { foreignKey: 'taskId' });

// One-to-one relationship between Task and TaskStatus
Task.hasOne(TaskStatus, { foreignKey: 'taskId' });
TaskStatus.belongsTo(Task, { foreignKey: 'taskId' });

// One-to-many relationship between Task and DateType
Task.belongsTo(DateType, { foreignKey: 'dateTypeId' });
DateType.hasMany(Task, { foreignKey: 'dateTypeId' });

// One-to-many relationship between Subtask and DateType
Subtask.belongsTo(DateType, { foreignKey: 'dateTypeId' });
DateType.hasMany(Subtask, { foreignKey: 'dateTypeId' });

// Many-to-many relationship between User and Notification
User.belongsToMany(Notification, { through: 'user_notifications' });
Notification.belongsToMany(User, { through: 'user_notifications' });


module.exports = {
  DateType,
  Notification,
  User,
  Role,
  Policy,
  Task,
  Subtask,
  TaskStatus
  
};

