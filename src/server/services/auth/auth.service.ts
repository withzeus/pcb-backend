import db from "../../../database/database";
import { users } from "../../../database/schema/auth";
import { logColors } from "../../../utils/visual/logging";
import { UserResponse, UserRequest } from "../../models/auth";
import { createUserId, hashEntry } from "../../../utils/functional/crypt";

type NewUser = typeof users.$inferInsert;
//C
export const createUser = async (
  userObj: UserRequest
): Promise<Partial<UserResponse | number>> => {
  const nU: NewUser = {
    userName: userObj.userName,
    userEmail: userObj.userEmail,
    userPassword: await hashEntry(userObj.userPassword),
    userInternalId: createUserId(userObj.userName, userObj.userEmail),
  };

  try {
    const r = await db
      .insert(users)
      .values(nU)
      .returning({ userName: users.userName });
    const res: UserResponse = {
      success: true,
      message: `Created User (${r[0].userName}).`,
    };
    return res;
  } catch (err) {
    console.log(
      logColors.fg.red + "%s" + logColors.reset,
      `[error] 💀 Database Error : ${(err as Error).message}`
    );
  }
  return -1;
};
