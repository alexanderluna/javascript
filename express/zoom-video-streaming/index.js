if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

const base = require('./routes/base');
const authentication = require('./routes/authentication');
const auth = require('./routes/auth');
const room = require('./routes/room');
const user = require('./routes/user');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use(express.json())

app.use('/', base);
app.use('/authentication', authentication);
app.use('/auth', auth);
app.use('/room', room);
app.use('/user', user);

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
