var dataFile  = require('./data/data.json')
var app       = require('express')()
var reload    = require('reload')

var home = require('./routes/index')
var speakers =

app.set('appData', dataFile)
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/', home);
app.use(require('./routes/speakers'));

var server = app.listen(3000, () => {
  console.log("Listening in port 3000");
});

reload(server,app)
