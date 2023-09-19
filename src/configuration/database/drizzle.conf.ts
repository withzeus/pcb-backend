import { Config } from "drizzle-kit";
import databaseConf from "./postgres.conf";

export default {
  schema: "./src/database/schema/*",
  out: "./src/database/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: `postgresql://${databaseConf.user}:${databaseConf.password}@${databaseConf.host}`,
  },
} satisfies Config;
