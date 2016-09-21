var express = require('express');
var http = require('http');
var logger = require('morgan');

var app = express();

app.use(logger('short'));

app.use(function(req, res){
  res.writeHead(200, {"Content-type": "text/plain"});
  res.end('Hello World');
});

http.createServer(app).listen(3000);
