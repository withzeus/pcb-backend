import express, { Express } from "express";
import cors from "cors";
import BindRoutes from "./routes/routes";

const App: Express = express();

//middlewares
App.use(cors());
//Bind routes
BindRoutes(App);

export default App;
