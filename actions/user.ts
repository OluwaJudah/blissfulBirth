"server-only";
import { CLIENT, CREDENTIALS } from "@/constants/user";
import dbConnect from "@/lib/db";
import User from "@/models/user";
import { Types } from "mongoose";

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

export const updateExistingUser = async (
  id: string,
  username: string,
  password: string
) => {
  await dbConnect();

  const userId = new Types.ObjectId(id);
  const user = User.findByIdAndUpdate(userId, {
    username,
    password,
    authType: CREDENTIALS,
    role: CLIENT,
  });

  return user;
};
