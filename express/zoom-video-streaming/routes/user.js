const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


router.post('/login', getUserByEmail, async (req, res) => {
  try {
    const { user } = res;
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET);
      return res.json({ accessToken });
    }
    throw new Error('Wrong password');
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });
    res.status(201).json(user);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


router.get('/:id', authenticateToken, (req, res) => {
  res.json(res.user);
});


router.patch('/:id', authenticateToken, async (req, res) => {
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


router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


async function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) throw new Error('Missing authorization token');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) throw new Error(error.message);
      res.user = user;
      next();
    });
  } catch ({ message }) {
    return res.json({ message });
  }
};


async function getUserByEmail(req, res, next) {
  let user;
  try {
    user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('Email not found');
  } catch ({ message }) {
    return res.json({ message });
  }
  res.user = user;
  next();
};


module.exports = router;
