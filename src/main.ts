import server from "./server/server";
import * as conf from "./configuration/config";
import { logColors } from "./utils/visual/logging";

const { restServerPort } = conf.serverConf;

server.listen(restServerPort, async () => {
  console.log(
    logColors.fg.green + "%s" + logColors.reset,
    `[server] ⚡️ Notice : REST API server is running at http://localhost:${restServerPort}`
  );
});
