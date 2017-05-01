var express = require('express');
var router = express.Router();

router.get('/speakers/', (req,res) => {
  var dataFile = req.app.get('appData')
  var info = '';
  dataFile.speakers.forEach((item) => {
    info += `
      <li>
        <p>${item.title}</p>
        <p>by: ${item.name}</p>
        <p>${item.summary}</p>
      </li>
      <script src="/reload/reload.js"></script>
    `
  })
  res.send(`
      <h1>Express Json data</h1>
      ${info}
    `)
})

router.get('/speakers/:speaker_id', (req,res) => {
  var dataFile = req.app.get('appData')
  var speaker = dataFile.speakers[req.params.speaker_id];
  res.send(`
      <h2>${speaker.title}</h2>
      <p>${speaker. name}</p>
      <p>${speaker.summary}</p>
      <script src="/reload/reload.js"></script>
    `)
})

module.exports = router;
