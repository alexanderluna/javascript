// api key: 52d9451c3db2384137980ad586885060
var express     = require('express');
var router      = express.Router();
var bodyParser  = require('body-parser');
var weather     = require('openweathermap');

weather.defaults({units:'metric', lang:'en', mode:'json', appid: process.env.APPID });


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/weather', (req,res) => {
  res.render('weather', {
    siteTitle: 'Express',
    pageTitle: 'Weather',
  });
});

router.get('/weather/:city', (req,res) => {
  var city = req.params.city;
  weather.now({q: city}, (err, json) => {
    res.json(json);
  })
})

router.post('/weather', (req,res) => {
  var city = req.body.city;
  weather.now({q: req.body.city}, (err, json) => {
    res.json(json)
  });
});

module.exports = router;
