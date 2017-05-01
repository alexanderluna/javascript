var express = require('express');
var http = require('http');

var app = express()

app.use(function(req, res){
  var response = "A new request for: " + req.url;
  console.log(response);
  res.end(response);
});

http.createServer(app).listen(3000);
