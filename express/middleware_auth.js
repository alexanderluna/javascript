var express = require('express');
var http = require('http');

var app = express();

// middleware function
app.use(function(req, res, next){
  console.log(req.method + ' request for: ' + req.url);
  next();
});

// authentication function
app.use(function(req, res, next){
  var minute = new Date().getMinutes();
  if ((minute % 2) === 0) {
    next();
  } else {
    res.statusCode = 403;
    res.end('Not authorized');
  }
});

// give response for authorized users
app.use(function(req, res) {
  res.end('Welcome, the secret password is "alexander".');
});

// create server
http.createServer(app).listen(3000);
