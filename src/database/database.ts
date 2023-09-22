import * as conf from "../configuration/config";
import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export default <NodePgDatabase>drizzle(new Pool(conf.databaseConf));
