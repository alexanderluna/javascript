const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../passport-config');
const router = express.Router();
const { isAlreadyAuthenticated } = require('../helper');
const User = require('../models/user');


initializePassport(
  passport,
  (email) => users.find(user => user.email === email),
  (id) => users.find(user => user.id === id)
);


router.get('/login', isAlreadyAuthenticated, (req, res) => {
  res.render('auth/login');
});


router.post('/login', isAlreadyAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true,
}));


router.get('/register', isAlreadyAuthenticated, (req, res) => {
  res.render('auth/register');
});


router.post('/register', isAlreadyAuthenticated, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword
    });
    res.redirect('/auth/login');
  } catch {
    res.redirect('/auth/register');
  }
  console.log(users);
});


router.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/auth/login')
});


module.exports = router;