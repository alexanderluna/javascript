var express = require('express');
var morgan  = require('morgan');
var path    = require('path');
var fs      = require('fs');

var app     = express();

// Logger
// app.use(function(req, res, next){
//   console.log('Request IP: ' + req.url);
//   console.log('Request Time: ' + new Date());
//   next();
// });

app.use(morgan('short'))

// Static File Sever
// app.use(function(req, res, next){
//   var filePath = path.join(__dirname, 'static', req.url);
//   fs.stat(filePath, function(err, file){
//     if(err){
//       next();
//       return;
//     };
//
//     if(file.isFile()){
//       res.sendFile(filePath);
//     } else {
//       next();
//     };
//   });
// });

var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));


// 404 Not found
app.use(function(req, res){
  res.status(404);
  res.send('File not found');
});

app.listen(3000, function(){
  console.log('App started on port 3000');
})
