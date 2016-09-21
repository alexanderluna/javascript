var express = require('express');
var path    = require('path');
var zipdb   = require('zippity-do-dah');
var fCast   = require('forecastio');

var app     = express();
var weather = new fCast('c42d88134d28015dbe99f737e8a4dc86');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'weather'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get(/^\/(\d{5})$/, function(req, res, netxt){
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if(!location.zipcode){
    next();
    return;
  };

  var latitude = location.latitude;
  var longitude = location.longitude;

  weather.forecast(latitude, longitude, function(err, data){
    if(err){
      next();
      return;
    };

    res.json({
      zipcode: zipcode,
      temperature: data.currently.temperature
    });
  });
});

app.use(function(req, res){
  res.status(404).render('404');
});

app.listen(3000);
