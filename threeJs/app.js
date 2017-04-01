// var decleration
var express = require('express');
var morgan  = require('morgan');
var http    = require('http');
var path    = require('path');
var app     = express();

// middleware setup
app.use(morgan('short'));

var staticPath = path.join(__dirname, 'views');
app.use(express.static(staticPath));

// run server
app.listen(3000, function(){
  console.log("App started on port 3000");
})
