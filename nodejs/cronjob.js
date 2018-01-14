let request  = require('request-json');

let nasa     = request.createClient('https://api.nasa.gov/planetary/');
let firebase = request.createClient('https://nasa-udacity.firebaseio.com/');

nasa.get('apod?api_key=DEMO_KEY', (err, res, body) => {

  let copyright = body.copyright ? body.copyright : 'Public Domain';

  let data = {
    date: body.date,
    explanation: body.explanation,
    media_type: body.media_type,
    title: body.title,
    url: body.url,
    copyright: copyright
  };

  firebase.post('Images.json', data, (err, res, body) => {
    if (err) return console.log("Error posting new image");
    console.log("Saved Images successfully");
  });
});
