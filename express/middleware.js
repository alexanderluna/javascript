var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next){
  console.log(req.method + ' request for: ' + req.url);
  next();
});

app.use(function(req, res){
  res.writeHead(200, {"Content-type": "text/plain"});
  res.end("Hello World");
});

http.createServer(app).listen(3000);
