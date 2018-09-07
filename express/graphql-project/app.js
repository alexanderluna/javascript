import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';
const app = express();

app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(1234, () => {
  console.log('Running on http://localhost:1234');
});