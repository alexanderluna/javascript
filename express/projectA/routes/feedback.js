var express     = require('express');
var bodyParser  = require('body-parser');
var router      = express.Router();
var Feedback    = require('../models/feedback');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/feedback', (req,res) => {
  Feedback.find().exec((e,feedback) => {
    res.render('feedback', {
      siteTitle: 'Express',
      pageTitle: 'Feedback',
      feedback: feedback
    });
  });
});

router.post('/feedback', (req, res) => {
  var reqName    = req.body.displayName;
  var reqContent = req.body.content;
  if (reqName && reqContent) {
    var feedback = new Feedback({
      displayName: reqName,
      content: reqContent
    });
    feedback.save();
    res.json(feedback);
  }
});

module.exports = router;
