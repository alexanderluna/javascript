const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { authenticateToken } = require('../helper');


router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.create();
    res.status(201).json(newUser);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.post('/login', generateTokens, async (req, res) => {
  try {
    if (await bcrypt.compare(req.body.password, res.user.password)) {
      const { accessToken, refreshToken } = res;
      return res.json({ accessToken, refreshToken });
    }
    throw new Error('Wrong password');
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.post('/token', async (req, res) => {
  try {
    const refreshToken = req.body.token;
    if (!refreshToken) throw new Error('missing refresh token');
    const token = await prisma.token.findMany({
      where: { value: refreshToken }
    });
    if (token.length <= 0) {
      return res.sendStatus(403);
    };
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      console.log(user);
      const accessToken = User.getAccessToken(user.id);
      res.json({ accessToken });
    });
  } catch ({ message }) {
    res.json({ message });
  }
});


router.delete('/logout', authenticateToken, async (req, res) => {
  try {
    const token = await prisma.token.deleteMany({
      where: { ownerId: parseInt(res.user.user) }
    })
    if (token.count == 0) {
      return res.sendStatus(403);
    }
    res.sendStatus(204);
  } catch ({ message }) {
    res.json({ message });
  }
});


async function generateTokens(req, res, next) {
  let accessToken, refreshToken, user;
  try {
    user = await User.findBy({ email: req.body.email })
    const token = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET);
    accessToken = User.getAccessToken(user.id);
    refreshToken = await prisma.token.create({
      data: {
        value: token,
        ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        userAgent: req.get('User-Agent') || '',
        owner: { connect: { id: parseInt(user.id) } },
      },
    });
  } catch ({ message }) {
    res.json({ message });
  }
  res.user = user;
  res.accessToken = accessToken;
  res.refreshToken = refreshToken.value;
  next();
}


module.exports = router;
