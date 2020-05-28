import { verify } from "jsonwebtoken";
import { env } from "process";
import { Context } from "src/Context";
import { MiddlewareFn } from "type-graphql";

export const isAuthenticated: MiddlewareFn<Context> = ({ context }, next) => {
  try {
    const authorization = context.req.headers["authorization"];
    const token = authorization!.split(" ")[1];
    const payload = verify(token, env.ACCESS_KEY!);
    context.payload = payload as any;
  } catch ({ message }) {
    console.log(message);
    throw new Error('Request not authenticated');
  }
  return next();
};
