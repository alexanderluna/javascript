var express = require('express');
var router = express.Router();

router.get('/restaurants', (req,res) => {
  var dataFile = req.app.get('appData')
  res.render('restaurants', {
    siteTitle: 'Express',
    pageTitle: 'Restaurants',
    restaurants: dataFile.restaurants
  });
});

router.get('/restaurants/:restaurant_name', (req,res) => {
  var dataFile = req.app.get('appData')
  var restaurant_name = req.params.restaurant_name;
  var restaurantList = []
  dataFile.restaurants.forEach((restaurant) => {
    console.log(restaurant);
    if (restaurant.path == restaurant_name) {
      restaurantList.push(restaurant);
    }
  });
  console.log(restaurantList);
  res.render('restaurant_show', {
    siteTitle: 'Express',
    pageTitle: restaurant_name,
    restaurants: restaurantList
  });

});

module.exports = router;
