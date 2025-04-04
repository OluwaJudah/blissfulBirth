"use server";

import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import MotherInfo from "@/models/mother-info";

export const getLastMentralDate = async () => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;

  const lastMenstrualDate = await MotherInfo.findOne(
    { userId },
    "lastMenstrualDate createdAt"
  );

  return lastMenstrualDate;
};
