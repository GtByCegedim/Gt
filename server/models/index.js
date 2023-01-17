const DateType = require('./dateType');
const Notification = require('./notification');
const User = require('./user');
const Role = require('./role');
const Policy = require('./policy');
const Task = require('./task');
const Subtask = require('./subtask');
const TaskStatus = require('./taskStatus');
const User_role = require('./user-role')
const Team = require('./team')

// Many-to-many relationship between User and Role
User.belongsToMany(Role, {
  through: User_role,
  as: 'Role',
  foreignKey: 'userId',
  otherKey: 'roleId',
});
Role.belongsToMany(User, {
  through: User_role,
  as: 'User',
  foreignKey: 'roleId',
  otherKey: 'userId',
});

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

Team.belongsToMany(User, { through: "UserTeam" });
User.belongsToMany(Team, { through: "UserTeam" });

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

