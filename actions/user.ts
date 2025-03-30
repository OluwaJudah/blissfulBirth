"server-only";
import dbConnect from "@/lib/db";
import { CLIENT, CREDENTIALS } from "@/lib/definitions";
import User from "@/models/user";

export const createUser = async (username: string, password: string) => {
  await dbConnect();

  const user = User.create({
    username,
    password,
    authType: CREDENTIALS,
    role: CLIENT,
  });

  return user;
};
