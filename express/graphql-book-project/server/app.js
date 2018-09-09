import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import db from './config/config';
import schema from './schema/schema';

const app = express();
app.use(cors());

(async () => {
  const database = await mongoose.connect(db.url, { useNewUrlParser: true });
  console.log(`Connected to Database: ${database.connection.name}`);
})()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});