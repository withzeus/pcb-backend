import jwtConf from "./auth/jwt.conf";
import databaseConf from "./database/postgres.conf";
import "dotenv/config";

const serverConf: {
  restServerPort: number;
} = {
  restServerPort:
    typeof process.env.REST_SERVER_PORT == "number"
      ? process.env.REST_SERVER_PORT
      : 8080,
};

export { jwtConf, databaseConf, serverConf };
