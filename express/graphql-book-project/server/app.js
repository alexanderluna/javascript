import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import models, { sequelize } from './models';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();
app.use(cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => ({
        models,
        me: await models.Author.findByLogin('Alexander'),
    }),
});
server.applyMiddleware({ app });

sequelize.sync().then(async () => {
    app.listen(4000, () => {
        console.log(`\n🚀 Server address: http://localhost:4000/graphql`);
    });
});