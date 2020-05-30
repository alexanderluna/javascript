import { sign } from "jsonwebtoken";
import { env } from "process";
import { User } from "../entity/User";

export const createAccessToken = ({ id }: User) => {
  return sign({ id }, env.ACCESS_KEY!, { expiresIn: "15m" });
};

export const createRefreshToken = ({ id, tokenVersion }: User) => {
  return sign({ id, tokenVersion }, env.REFRESH_KEY!, { expiresIn: "7d" });
};
