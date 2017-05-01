// var express = require('express');
// var router = express.Router();
//
// router.get('/', (req,res) => {
//   res.send(`
//       <h1>Welcome to the speakers Website</h1>
//       <p>We love to feature speakers please take a look at our list of speakers</p>
//     `)
// })
//
// module.exports = router

var app       = require('express')();

app.listen(3000, () => {
  console.log("Listening in port 3000");
});
