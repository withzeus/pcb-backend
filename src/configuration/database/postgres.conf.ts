import "dotenv/config";
import { PoolConfig } from "pg";

const databaseConf: PoolConfig = {
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOSTNAME as string,
  database: process.env.DB_DATABASE as string,
  password: process.env.DB_PASSWORD as string,
  port: typeof process.env.DB_PORT == "number" ? process.env.DB_PORT : 5432,
};

export default databaseConf;
