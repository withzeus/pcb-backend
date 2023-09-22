import { Express } from "express";
import userRoutes from "./user/user.route";

export default function BindRoutes(app: Express): Express {
  //Reg route groups here
  app.use("/users", userRoutes);
  return app;
}
