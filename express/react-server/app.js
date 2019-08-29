const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api', sessionRoutes);

module.exports = app;
