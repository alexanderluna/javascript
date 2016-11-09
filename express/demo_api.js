var express = require('express');
var logger  = require('morgan');
var app     = express()

app.use(logger('short'));

app.get('/random/:min/:max', function(req, res){
  var min = parseInt(req.params.min);
  var max = parseInt(req.params.max);

  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({ error : "Bad parameters"});
    return;
  }

  var result = Math.round((Math.random() * (max - min)) + min)
  res.json({ number : result})
});

app.listen(3000, function(){
  console.log("App started on port 3000");
});
