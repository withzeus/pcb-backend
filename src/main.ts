import server from "./server/server";
import * as conf from "./configuration/config";
import { logger } from "./utils/functional/logging";

const { restServerPort } = conf.serverConf;

server.listen(restServerPort, async () => {
  logger(
    "application",
    `REST API server is running at http://localhost:${restServerPort}`,
    "Application"
  );
});
