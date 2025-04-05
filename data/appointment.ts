"use server";

import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";

export const getNextAppointmentData = async (fields: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;
  const appointment = await Appointment.find({ userId }, fields)
    .sort({ createdAt: -1 })
    .limit(1)
    .lean();

  return appointment[0];
};
