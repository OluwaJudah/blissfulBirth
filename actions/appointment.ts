"use server";
import { CONFIRMED_APPOINTMENT } from "@/constants/appointment";
import { IAppointment } from "@/definitions/appointment";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import { Types } from "mongoose";
import { redirect } from "next/navigation";

export const createAppointment = async (
  appointmentData: IAppointment,
  from = ""
) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  let appointment = null;
  try {
    appointment = await Appointment.create({
      ...appointmentData,
      userId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating Appointment:" + error);
  }

  redirect(
    `/confirmed-booking?bookingId=${appointment.id}${
      from !== "" ? `&from=${from}` : ""
    }`
  );
};

export const updateAppointment = async (id: string, note = "") => {
  await dbConnect();
  const objectId = new Types.ObjectId(id);
  try {
    await Appointment.findByIdAndUpdate(objectId, {
      status: CONFIRMED_APPOINTMENT,
      note,
    });
  } catch (err) {
    throw Error(`Error: Failed to update appointment and ${err}`);
  }
};
