if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const { static, urlencoded } = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const base = require('./routes/base');
const authentication = require('./routes/authentication');
const room = require('./routes/room');

app.set('view engine', 'ejs');
app.use(static('public'));
app.use(urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use('/', base);
app.use('/auth', authentication);
app.use('/room', room);

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    console.log(`Room ID: ${roomId}\nUser ID: ${userId}`);
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    });
  });
});

server.listen(3000);
