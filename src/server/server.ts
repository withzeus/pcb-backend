import express, { Express } from "express";
import cors from "cors";
import useRoutes from "./routes/user/user.route";

const App: Express = express();

//accept cross sharing
App.use(cors());

//boostrap routes
// App.use("/users", (res, req) => req.send("Hi"));
App.use("/users", useRoutes);

export default App;
