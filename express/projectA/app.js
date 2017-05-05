// start app with: nodemon app.js -e ejs,js,css,json
var express   = require('express');
var app       = express();
var reload    = require('reload');
var server    = require('http').Server(app);
var io        = require('socket.io')(server);

var dataFile  = require('./data/restaurants.json');

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(require('./routes/index'));
app.use(require('./routes/restaurants'));
app.use(require('./routes/chat'));
app.use(require('./routes/weather'));
app.use(express.static('public'));

// socket connection
server.listen(3000);
io.on('connection', (socket) => {
  socket.on('postMessage', (data) => {
    io.emit('updateMessages', data);
  });
});

io.on('disconnect', () => {
  console.log('User disconnected');
});

reload(server,app);


/* npm packages
 socket.io
 express
 body-parser
 http
 openweathermap
*/
