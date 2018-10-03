import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import ConfigPassport from './config/passport';
import config from './config/keys';
import users from './routes/api/users';
import profile from './routes/api/profile';
import entries from './routes/api/entries';

const app = express();

(async () => {
  const db = await mongoose.connect(config.DB_URL, { useNewUrlParser: true })
  console.log(`☁️  Database connected: ${db.connection.name}`);
})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
ConfigPassport(passport);

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/entries', entries);

app.use((err, _, res, _) => {
  console.error(`🚨 ERROR FOUND:\n${err.stack}`);
  res.status(500).json({ message: 'Internal Error' });
});

const PORT = process.argv.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});