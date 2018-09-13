import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import db from './config/config';
import { typeDefs, resolvers } from './schema/apollo-schema';

const app = express();
app.use(cors());

(async () => {
  const database = await mongoose.connect(db.url, { useNewUrlParser: true });
  console.log(`Connected to Database: ${database.connection.name}`);
})()

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`Server ready http://localhost:4000${server.graphqlPath}`);
});