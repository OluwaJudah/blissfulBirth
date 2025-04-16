"use server";
import { IAppointment } from "@/definitions/appointment";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import { redirect } from "next/navigation";

export const createAppointment = async (appointmentData: IAppointment) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;
  let appointment = null;
  try {
    appointment = await Appointment.create({
      ...appointmentData,
      userId,
    });
  } catch (error) {
    throw new Error("Error creating Appointment:" + error);
  }

  redirect(`/confirmed-booking?bookingId=${appointment.id}`);
};
