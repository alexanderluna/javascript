import { sign } from "jsonwebtoken";
import { env } from "process";
import { User } from "../entity/User";

export const createAccessToken = (user: User) => {
  return sign({ id: user.id }, env.ACCESS_KEY!, { expiresIn: "15m" });
};

export const createRefreshToken = (user: User) => {
  return sign({ id: user.id }, env.REFRESH_KEY!, { expiresIn: "7d" });
};
