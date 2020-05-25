const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { authenticateToken } = require('../helper');


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


router.post('/login', getUserByEmail, generateTokens, async (req, res) => {
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
      const accessToken = generateAccessToken(user.user);
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


async function getUserByEmail(req, res, next) {
  let user;
  try {
    user = await prisma.user.findOne({
      where: { email: req.body.email }
    });
    if (!user) throw new Error('Email not found');
  } catch ({ message }) {
    res.json({ message });
  }
  res.user = user;
  next();
}


async function generateTokens(req, res, next) {
  let accessToken, refreshToken;
  try {
    const user = res.user.id;
    const token = jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET);
    accessToken = generateAccessToken(user);
    refreshToken = await prisma.token.create({
      data: {
        value: token,
        ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        userAgent: req.get('User-Agent') || '',
        owner: { connect: { id: parseInt(user) } },
      },
    });
  } catch ({ message }) {
    res.json({ message });
  }
  res.accessToken = accessToken;
  res.refreshToken = refreshToken.value;
  next();
}


function generateAccessToken(user) {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};


module.exports = router;
