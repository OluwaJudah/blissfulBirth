"use server";

import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import MotherInfo from "@/models/mother-info";

export const getMotherInfoData = async (fields: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;

  return await MotherInfo.findOne({ userId }, fields);
};
