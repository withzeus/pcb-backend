import { NextFunction, Request, Response } from "express";
import { logger } from "../../../utils/functional/logging";

export const AuthMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  logger(
    "notice",
    `Request from ${req.hostname} has reached middleware`,
    "Middleware"
  );
  next();
};
