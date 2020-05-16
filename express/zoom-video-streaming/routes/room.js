const express = require('express');
const { v4: uuid } = require('uuid');
const router = express.Router();
const { isAuthenticated } = require('../helper');


router.get('/', isAuthenticated, (_, res) => {
  res.redirect(`/room/${uuid()}`);
});


router.get('/:room', isAuthenticated, (req, res) => {
  res.render('room/room', { roomId: req.params.room });
});


module.exports = router;