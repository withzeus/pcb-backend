import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import * as UsrController from "../../controllers/auth/auth.controller";

const userRoutes = Router();

/** Set middleware for user related route*/
userRoutes.use(AuthMiddleware);
/** Set user related route endpoints */
userRoutes.get("/", UsrController.GetUsers);

/** export user routes */
export default <Router>userRoutes;
