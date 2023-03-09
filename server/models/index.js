const DateType = require("./dateType");
const Notification = require("./notification");
const User = require("./user");
const Role = require("./role");
const Policy = require("./policy");
const Task = require("./task");
const Subtask = require("./subtask");
const User_role = require("./user-role");
const Team = require("./team");
const Project = require("./project");
const Task_User = require("./task_user");
const Project_User = require("./project_user");
const team_user = require("./team_user");
const user_notifications = require("./user_notifications");
const task_statut = require("./task_statut");
const Statut = require("./status");

// Many-to-many relationship between User and Role
User.belongsToMany(Role, {
  through: User_role,
  as: "Role",
  foreignKey: "userId",
  otherKey: "roleId",
});
Role.belongsToMany(User, {
  through: User_role,
  as: "User",
  foreignKey: "roleId",
  otherKey: "userId",
});

// Many-to-many relationship between Role and Policy
Role.belongsToMany(Policy, { through: "role_policies" });
Policy.belongsToMany(Role, { through: "role_policies" });

// One-to-many relationship between Task and Subtask
Task.hasMany(Subtask, { foreignKey: "taskId" });
Subtask.belongsTo(Task, { foreignKey: "taskId" });

// One-to-one relationship between Task and us
Task.hasMany(Statut, { foreignKey: "status" });
Statut.belongsTo(Task, { foreignKey: "status" });

// One-to-many relationship between Task and DateType
Task.belongsTo(DateType, { foreignKey: "dateTypeId" });
DateType.hasMany(Task, { foreignKey: "dateTypeId" });

// One-to-many relationship between Subtask and DateType
Subtask.belongsTo(DateType, { foreignKey: "dateTypeId" });
DateType.hasMany(Subtask, { foreignKey: "dateTypeId" });

// Many-to-many relationship between User and Notification
User.belongsToMany(Notification, { through: user_notifications });
Notification.belongsToMany(User, { through: user_notifications });

/* This is a many-to-many relationship between Team and User. */
Team.belongsToMany(User, {
  through: team_user,
  as: "User",
  foreignKey: "teamId",
  otherKey: "userId",
});
User.belongsToMany(Team, {
  through: team_user,
  as: "Team",
  foreignKey: "userId",
  otherKey: "teamId",
});

Team.hasMany(Project, { foreignKey: "teamId" });
Project.belongsTo(Team, { foreignKey: "teamId" });
/* This is a many-to-many relationship between Task and User. */
Task.belongsToMany(User, {
  through: Task_User,
  as: "User",
  foreignKey: "taskId",
  otherKey: "userId",
});
User.belongsToMany(Task, {
  through: Task_User,
  as: "Task",
  foreignKey: "userId",
  otherKey: "taskId",
});

/* This is a many-to-many relationship between Project and User. */
Project.belongsToMany(User, {
  through: Project_User,
  as: "User",
  foreignKey: "projectId",
  otherKey: "userId",
});
User.belongsToMany(User, {
  through: Project_User,
  as: "Project",
  foreignKey: "userId",
  otherKey: "projectId",
});

Task.belongsTo(Project, { foreignKey: "projectId" });
Project.hasMany(Task, { foreignKey: "projectId" });

Project.belongsTo(User, {
  foreignKey: "manager",
  as: "Manager",
});
Task.belongsTo(Statut, { foreignKey: "status", as: "Status" });
Task.belongsTo(User, { foreignKey: "assignedTo", as: "AssignationTo" });
Team.belongsTo(User, { foreignKey: "manager", as: "Manager" });

module.exports = {
  DateType,
  Notification,
  User,
  Role,
  Policy,
  Task,
  Subtask,
  Statut,
  Project,
  Team,
  user_notifications,
};
