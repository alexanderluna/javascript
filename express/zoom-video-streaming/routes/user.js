const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { authenticateToken } = require('../helper');


router.get('/', async (_, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findOne({ where: { id } });
    if (!user) throw new Error('This user does not exist');
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});


router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    if (res.user.id != req.params.id) throw new Error('Not authorized');
    if (req.body.name != null) {
      res.user.name = req.body.name;
    }
    if (req.body.email != null) {
      res.user.email = req.body.email;
    }
    if (req.body.password != null) {
      res.user.password = await bcrypt.hash(req.body.password, 10);
    }
    const id = parseInt(req.params.id);
    const { name, email, password } = res.user;
    const user = await prisma.user.update({
      where: { id },
      data: { name, email, password }
    })
    res.json(user);
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
