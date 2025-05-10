"use server";
import { COMPLETED_APPOINTMENT } from "@/constants/appointment";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import Appointment from "@/models/appointment";
import BabyReport from "@/models/baby-report";
import MotherReport from "@/models/mother-report";
import { Types } from "mongoose";

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

  const userId = session?.userId as string;
  const appointment = await Appointment.find(
    { userId: new Types.ObjectId(userId) },
    "pregnancyWeeks date time status type"
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

  const userId = session?.userId as string;
  const appointments = await Appointment.find(
    { userId: new Types.ObjectId(userId) },
    "pregnancyWeeks date time status type"
  )
    .sort({ createdAt: -1 })
    .lean();

  if (appointments[0] && appointments[0].status === COMPLETED_APPOINTMENT)
    return appointments[0];
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

  const userId = session?.userId as string;
  const data = await Appointment.aggregate([
    {
      $match: { userId: new Types.ObjectId(userId) }, // Filter by specific userId
    },
    {
      $lookup: {
        from: "babyreports",
        localField: "_id",
        foreignField: "appointmentId",
        as: "babyreports",
      },
    },
    {
      $unwind: {
        path: "$babyreports",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);

  return data.reduce(
    (acc: any, { _id, babyreports, status, pregnancyWeeks }) => {
      if (babyreports) {
        const { babyHeight, babyWeight } = babyreports;
        acc[pregnancyWeeks] = {
          appointmentId: _id.toString(),
          babyHeight,
          babyWeight,
          status,
        };
        return acc;
      }
      return {};
    },
    {}
  );
};

export const getBabyReports = async (appointmentIds: string[], fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const objectIds = appointmentIds.map((id) => new Types.ObjectId(id));

  return await BabyReport.find(
    { appointmentId: { $in: objectIds } },
    fields
  ).lean();
};

export const getBabyReport = async (appointmentId: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await BabyReport.findOne(
    { appointmentId: new Types.ObjectId(appointmentId) },
    "babyHeight babyPosition babyWeight babyHeartRate babyNote"
  ).lean();
};

export const getMotherReport = async (appointmentId: string) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  return await MotherReport.findOne(
    { appointmentId: new Types.ObjectId(appointmentId) },
    { _id: 0, createdAt: 0, updatedAt: 0, __v: 0, appointmentId: 0 }
  ).lean();
};
