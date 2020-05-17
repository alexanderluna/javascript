const express = require('express');
const route = express.Router();
const { isAuthenticated } = require('../helper');


route.get('/', isAuthenticated, (req, res) => {
  const { name } = req.user;
  res.render('base/home', { name });
});


module.exports = route;