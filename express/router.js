~var express = require('express');
var http    = require('http');
var path    = require('path');
var logger  = require('morgan');

var app = express();

// setup our directory and path to the public folder
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//set logger
app.use(logger('short'));

// define individual routes
app.get('/', function(req, res){
  res.end('Welcome to the homepage');
});

app.get('/about', function(req, res){
  res.end('This is the about page');
});

app.use(function(req, res){
  res.statusCode = 404;
  res.end('404! Not found');
});

http.createServer(app).listen(3000);
