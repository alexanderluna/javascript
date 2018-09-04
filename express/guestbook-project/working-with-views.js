var express = require('express');
var http    = require('http');
var path    = require('path');
var logger  = require('morgan');
var app     = express();

// set logger to morgan
app.use(logger('short'));

// set express to use the views folder
app.set('views', path.resolve(__dirname, 'views'));

// set express to use ejs template
app.set('view engine', 'ejs');

// set express view
app.get('/', function(req, res){
  res.render("index", {
    message: "Hey everyone, This is my webpage",
    name: "Alexander"
  });
});

app.get('/about', function(req, res){
  res.render('about.ejs', {
    text: "Welcome to my about page"
  });
});


http.createServer(app).listen(3000);
