import { logColors } from "../standards/logging";

type loggT = "normal" | "error" | "warning" | "notice" | "application";

export function logger(t: loggT, m: string, f: string): void {
  switch (t) {
    case "error":
      console.log(
        logColors.fg.red + "%s" + logColors.reset,
        `[${t}] 💀 ${f} : ${m}`
      );
      break;
    case "application":
      console.log(
        logColors.fg.green + "%s" + logColors.reset,
        `[${t}] ⚡️ ${f} : ${m}`
      );
      break;
    case "notice":
      console.log(
        logColors.fg.blue + "%s" + logColors.reset,
        `[${t}] 🤖 ${f} : ${m}`
      );
      break;
    default:
      break;
  }
}
