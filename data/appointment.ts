"use server";
import {
  APPOINTMENT,
  COMPLETED_APPOINTMENT,
  CONFIRMED_APPOINTMENT,
  PENDING_APPOINTMENT,
} from "@/constants/appointment";
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

  return await Appointment.findById(
    id,
    "date time status type note pregnancyWeeks"
  );
};

export const getNextAppointmentData = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  const appointments = await Appointment.find(
    {
      userId: new Types.ObjectId(userId),
      status: { $in: [CONFIRMED_APPOINTMENT, PENDING_APPOINTMENT] },
    },
    "pregnancyWeeks date time status type"
  )
    .sort({ date: 1 })
    .limit(1)
    .lean();

  return appointments[0];
};

export const getLastAppointmentData = async () => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  const appointments = await Appointment.find(
    {
      userId: new Types.ObjectId(userId),
      status: COMPLETED_APPOINTMENT,
      type: APPOINTMENT,
    },
    "pregnancyWeeks date time status type"
  )
    .sort({ date: -1 })
    .lean();

  return appointments[0] ? appointments[0] : null;
};

export const getAppointments = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  const data = await Appointment.aggregate([
    {
      $match: { userId: new Types.ObjectId(userId), type: APPOINTMENT }, // Filter by specific userId
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
    {
      $project: {
        appointmentId: "$_id",
        status: "$status",
        pregnancyWeeks: "$pregnancyWeeks",
        babyHeight: "$babyreports.babyHeight",
        babyHeartRate: "$babyreports.babyHeartRate",
      },
    },
  ]);

  const result: any = {};
  data.forEach((a) => {
    result[a.pregnancyWeeks] = a;
  });

  return result;
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

  const motherReport = (await MotherReport.findOne(
    { appointmentId: new Types.ObjectId(appointmentId) },
    { _id: 0, createdAt: 0, updatedAt: 0, __v: 0, appointmentId: 0 }
  )) as any;

  const {
    motherBloodPressure,
    motherFh,
    motherGlucose,
    motherLeucosite,
    motherNote,
    motherPalpation,
    motherProtein,
    motherPulse,
    motherWeight,
  } = motherReport;

  return {
    motherBloodPressure,
    motherFh,
    motherGlucose,
    motherLeucosite,
    motherNote,
    motherPalpation,
    motherProtein,
    motherPulse,
    motherWeight,
  };
};
