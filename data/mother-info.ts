"use server";
import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import BloodResult from "@/models/blood-result";
import MedicalHistory from "@/models/medical-history";
import MotherInfo from "@/models/mother-info";
import { Types } from "mongoose";

export const getMotherInfo = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  const motherInfo = (await MotherInfo.findOne(
    { userId: new Types.ObjectId(userId) },
    fields
  )) as any;

  const {
    _id,
    fullName,
    surname,
    maidenName,
    idPassportNo,
    dateOfBirth,
    lastMenstrualDate,
    contactNumber,
    email,
    countryOfOrigin,
    occupation,
  } = motherInfo;

  return {
    id: _id.toString(),
    fullName,
    surname,
    maidenName,
    idPassportNo,
    dateOfBirth,
    lastMenstrualDate,
    contactNumber,
    email,
    countryOfOrigin,
    occupation,
  };
};

export const getMotherInfoData = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  return (await MotherInfo.findOne(
    { userId: new Types.ObjectId(userId) },
    fields
  )) as any;
};

export const getBloodResult = async (fields = "") => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  return (await BloodResult.findOne(
    { userId: new Types.ObjectId(userId) },
    fields
  )) as any;
};

export const getMedicalHistory = async () => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  const medicalHistory = (await MedicalHistory.findOne(
    {
      userId: new Types.ObjectId(userId),
    },
    { __v: 0, createdAt: 0, updatedAt: 0 }
  ).lean()) as any;

  if (!medicalHistory) return null;

  const {
    _id,
    details,
    allergies,
    operations,
    medication,
    conditions,
    familyHistory,
    tbSymptomsScreen,
  } = medicalHistory;

  return {
    id: _id.toString(),
    details,
    allergies,
    operations,
    medication,
    conditions,
    familyHistory,
    tbSymptomsScreen,
  };
};
