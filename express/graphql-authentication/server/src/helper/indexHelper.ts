import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('gqid', token, { httpOnly: true });
}