const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const savedUser = await res.user.save();
    res.json({ savedUser });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
  res.user = user;
  next();
};

module.exports = router;
