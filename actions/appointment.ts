"use server";
import { IAppointment } from "@/definitions/appointment";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import { redirect } from "next/navigation";

export const createFirstAppointment = async (appointmentData: IAppointment) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;

  try {
    await Appointment.create({ ...appointmentData, userId });
  } catch (error) {
    throw new Error("Error creating MotherInfo:" + error);
  }

  redirect("/home");
};
