import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import ConfigPassport from './config/passport';
import db from './config/keys';
import users from './routes/api/users';
import profile from './routes/api/profile';
import entries from './routes/api/entries';

const app = express();

(async () => {
  const database = await mongoose.connect(db.mongoURI, { useNewUrlParser: true })
  console.log(`Database connected: ${database.connection.name}`);
})()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
ConfigPassport(passport);

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/entries', entries);

const PORT = process.argv.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
})