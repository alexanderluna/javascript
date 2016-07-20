var express = require('express')
var app = express()
var router = express.Router()

router.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.use('/home', router)
app.listen(8000)

console.log("Waiting on port 8000")
