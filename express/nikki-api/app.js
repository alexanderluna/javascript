import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import entries from './routes/api/entries';

const app = express();

(async () => {
  const db = await mongoose.connect(config.DB_URL, { useNewUrlParser: true });
  console.log(`☁️ Database connected: ${db.connection.name}`);
})();

app.use('/api/entries', entries);

const PORT = process.argv.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Started server on localhost:${PORT}`);
});
