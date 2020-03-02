var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
  var dataFile = req.app.get('appData')
  res.render('index', {
    siteTitle: 'Express',
    pageTitle: 'Home',
    restaurants: dataFile.restaurants
  });
});

module.exports = router;
