import "dotenv/config";
import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolvers";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { env } from "process";
import { User } from "./entity/User";
import { createAccessToken, createRefreshToken } from "./helper/userHelper";
import { sendRefreshToken } from "./helper/indexHelper";

(async () => {
    const app = express();
    app.use(cookieParser());

    await createConnection();

    app.post('/refresh_token', async (req, res) => {
        try {
            const token = req.cookies.gqid;
            const payload = verify(token, env.REFRESH_KEY!) as any;
            const user = await User.findOne({ id: payload.id }) as User;
            if (user.tokenVersion !== payload.tokenVersion) {
                throw new Error('Invalid token')
            }
            sendRefreshToken(res, createRefreshToken(user));
            return res.send({ ok: true, refreshToken: createAccessToken(user) });
        } catch {
            return res.send({ ok: false, accessToken: '' });
        }
    });

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`
        🚀 Running on port 4000
        🖥  Server: http://localhost:4000/
        🧪 GraphiQL: http://localhost:4000/graphql
        `);
    });
})();
