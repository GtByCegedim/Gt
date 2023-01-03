const Task = require('../models/task');

exports.getAll = async (req, res) => {
  const tasks = await Task.findAll();
  res.send(tasks);
};

exports.create = async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
};

exports.update = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).send('Task not found');
  }
  await task.update(req.body);
  res.send(task);
};

exports.delete = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).send('Task not found');
  }
  await task.destroy();
  res.send(task);
};