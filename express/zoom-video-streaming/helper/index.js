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


module.exports = {
  isAuthenticated,
  isAlreadyAuthenticated,
};