import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import User from "@/models/user";
import { cache } from "react";

export const getUser = cache(async (username: string) => {
  const session = await verifySession();
  if (!session) return null;

  try {
    await dbConnect();
    const user = await User.findOne({ username });

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});

export const isUserExists = async (username: string) => {
  try {
    await dbConnect();
    const user = await getUser(username);

    return !!user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
};
