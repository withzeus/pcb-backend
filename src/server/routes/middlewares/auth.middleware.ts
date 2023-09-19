import { NextFunction, Request, Response } from "express";
import { logColors } from "../../../utils/visual/logging";

export const AuthMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  console.log(
    logColors.fg.blue + "%s" + logColors.reset,
    `👩🏻‍💻[rest] : Request from ${req.hostname} has hitted middleware \n`
  );
  next();
};
