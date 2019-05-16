import express from 'express';
import entries from './routes/api/entries';

const app = express();

app.use('/api/entries', entries);

const PORT = process.argv.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Started server on localhost:${PORT}`);
});
