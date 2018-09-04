var express = require("express");
var  multer = require('multer');
var  app = express();
var  upload = multer({ dest: "./multer_uploads/" });
var path    = require('path');
var http = require('http');

// set express to use the views folder
app.set('views', path.resolve(__dirname, 'views'));

// set express to use ejs template
app.set('view engine', 'ejs');

app.get('/measure', function(req, res){
    res.render('multer_views');
});
app.post("/measure", upload.single("thisfile"), function (req, res) {
    console.log(req.file);
});


http.createServer(app).listen(3000);
