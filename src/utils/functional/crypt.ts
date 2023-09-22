import crypto from "crypto-js";
import * as bcrypt from "bcryptjs";
import { logColors } from "../visual/logging";

export function createUserId(userName: string, userEmail: string): string {
  var cipherTxt = crypto.AES.encrypt(userEmail, userName).toString();
  return cipherTxt;
}

export async function hashEntry(password: string): Promise<string> {
  var hP: string = "";
  await bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => (hP = hash))
    .catch((err) => {
      console.log(
        logColors.fg.red + "%s" + logColors.reset,
        `[error] 💀 Encryption error : \t ${err}`
      );
    });

  return hP;
}

export async function verifyHash(pw: string, hash: string): Promise<boolean> {
  var isLegit: boolean = false;
  bcrypt.compare(pw, hash, async function (err, isMatch) {
    if (err) {
      console.log(`💀Failed verify attempt : \t ${err}`);
    }
    isLegit = isMatch;
  });
  return isLegit;
}
