const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { authenticateToken } = require('../helper');


router.get('/', async (_, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});


router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    if (res.user.id != req.params.id) throw new Error('Not authorized');
    const user = new User(req.body);
    const updatedUser = await user.update();
    res.json(updatedUser);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


module.exports = router;
