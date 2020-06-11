const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
};


const isAlreadyAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  return next();
};


const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) throw new Error('Missing authorization token');
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
      if (error) throw new Error(`verify error: ${error.message}`);
      res.user = user;
      next();
    });
  } catch ({ message }) {
    return res.json({ message });
  }
};


module.exports = {
  isAuthenticated,
  isAlreadyAuthenticated,
  authenticateToken,
};