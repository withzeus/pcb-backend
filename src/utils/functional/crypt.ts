import crypto from "crypto-js";
import * as bcrypt from "bcryptjs";
import { logger } from "./logging";

export function createUserId(un: string, ue: string): string {
  var ct = crypto.AES.encrypt(un, ue).toString();
  return ct;
}

export async function hashEntry(p: string): Promise<string> {
  var hP: string = "";
  await bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(p, salt))
    .then((hash) => (hP = hash))
    .catch((err) => {
      logger("error", err, "Hash error");
    });

  return hP;
}

export async function verifyHash(pw: string, hash: string): Promise<boolean> {
  var isl: boolean = false;
  await bcrypt
    .compare(pw, hash)
    .then((ism) => (isl = ism))
    .catch((err) => logger("error", err, "Verify hash error"));
  return isl;
}
