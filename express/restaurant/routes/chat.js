var express = require('express');
var app     = express();
var router  = express.Router();

router.get('/chat', (req,res) => {
  res.render('chat', {
    siteTitle: 'Express',
    pageTitle: 'Chat'
  });
});


module.exports = router;
