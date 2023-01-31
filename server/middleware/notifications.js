const Notification = require('../models/notification')

const createNotification = (functionName) => async (req, res, next) => {
  try {
    const title = `Notification for ${functionName}`;
    const message = `You have been ${functionName}`;
    const type = functionName;
    const notification = await Notification.create({
      title,
      message,
      type
    });
    next();
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = createNotification;