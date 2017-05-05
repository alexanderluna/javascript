// api key: 52d9451c3db2384137980ad586885060
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/weather', (req,res) => {
  res.render('weather', {
    siteTitle: 'Express',
    pageTitle: 'Weather',
  });
});

router.post('/weather', (req,res) => {
  res.json(req.body);
});

module.exports = router;
