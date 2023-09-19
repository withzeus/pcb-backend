import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as conf from "../configuration/config";

export default <NodePgDatabase>drizzle(new Pool(conf.databaseConf));
