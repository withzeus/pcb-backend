import { NextFunction, Request, Response } from "express";
import { logColors } from "../../../utils/standards/logging";

export const AuthMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  console.log(
    logColors.fg.blue + "%s" + logColors.reset,
    `[rest] 🤖 Notice : Request from ${req.hostname} has reached middleware`
  );
  next();
};
