"use server";
import { COMPLETED_APPOINTMENT } from "@/constants/appointment";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import BabyReport from "@/models/baby-report";
import MotherReport from "@/models/mother-report";

export const getAppointment = async (id: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await Appointment.findById(id, "date time status note pregnancyWeeks");
};

export const getNextAppointmentData = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;
  const appointment = await Appointment.find(
    { userId },
    "pregnancyWeeks date time status"
  )
    .sort({ createdAt: -1 })
    .limit(1)
    .lean();

  return appointment[0];
};

export const getLastAppointmentData = async () => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;
  const appointments = await Appointment.find(
    { userId },
    "pregnancyWeeks date time status"
  )
    .sort({ createdAt: -1 })
    .lean();

  if (appointments[0].status === COMPLETED_APPOINTMENT) return appointments[0];
  if (
    appointments.length > 1 &&
    appointments[1].status === COMPLETED_APPOINTMENT
  )
    return appointments[1];

  return null;
};

export const getAppointments = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId;
  return await Appointment.find({ userId }, fields).lean();
};

export const getBabyReports = async (appointmentIds: string[], fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await BabyReport.find(
    { appointmentId: { $in: appointmentIds } },
    fields
  ).lean();
};

export const getBabyReport = async (appointmentId: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await BabyReport.findOne(
    { appointmentId },
    "babyHeight babyPosition babyWeight babyHeartRate babyNote"
  ).lean();
};

export const getMotherReport = async (appointmentId: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await MotherReport.findOne(
    { appointmentId },
    { _id: 0, createdAt: 0, updatedAt: 0, __v: 0, appointmentId: 0 }
  ).lean();
};
