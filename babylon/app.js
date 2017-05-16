var express   = require('express');
var http      = require('http');
var morgan    = require('morgan');
var path      = require('path');

var app       = express();

app.use(morgan('short'));

var staticPath = path.join(__dirname, 'views');
app.use(express.static(staticPath));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
