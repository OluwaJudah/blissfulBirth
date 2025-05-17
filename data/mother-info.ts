"use server";

import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import MotherInfo from "@/models/mother-info";
import { Types } from "mongoose";

export const getMotherInfoData = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  return (await MotherInfo.findOne(
    { userId: new Types.ObjectId(userId) },
    fields,
  )) as any;
};
