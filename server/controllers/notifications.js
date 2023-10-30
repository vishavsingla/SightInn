const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const requireUser = require('../middlewares/requireUser');

router.post('/notifications', requireUser, async (req, res) => {
  try {
    const { user, message } = req.body;

    const newNotification = new Notification({
      user,
      message,
    });

    await newNotification.save();

    res.status(201).json(newNotification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create a notification' });
  }
});


router.get('/notifications', requireUser, async (req, res) => {
  try {
    const userId = req._id;

    const notifications = await Notification.find({ user: userId }).sort({ timestamp: -1 });

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve notifications' });
  }
});


router.patch('/notifications/:notificationId', requireUser, async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    notification.read = true;
    await notification.save();

    res.status(200).json({ message: 'Notification marked as read' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark the notification as read' });
  }
});


router.delete('/notifications/:notificationId', requireUser, async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    await notification.remove();

    res.status(200).json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the notification' });
  }
});

module.exports = router;
