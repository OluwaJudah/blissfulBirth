"use server";
import { redirect } from "next/navigation";
import {
  CreateMotherInfoFormState,
  createMotherInfoSchema,
  IMedicalHistory,
  IBabyInfo,
  IBirthCompanion,
  IMotherInfo,
} from "@/definitions/mother-info";
import MotherInfo from "@/models/mother-info";
import dbConnect from "@/lib/db";
import { verifySession } from "@/lib/dal";
import BirthCompanion from "@/models/birth-companion";
import BabyInfo from "@/models/baby-info";
import MedicalHistory from "@/models/medical-history";
import { Types } from "mongoose";

export async function createMotherInfo(
  prevState: CreateMotherInfoFormState | undefined,
  formData: FormData
) {
  const validatedFields = createMotherInfoSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: CreateMotherInfoFormState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }
  const {
    details,
    medication,
    operations,
    allergies,
    conditions,
    familyHistory,
    tbSymptomsScreen,
    motherInfo,
    birthCompanion,
    babyInfo,
  } = validatedFields.data;

  const motherInfoData = JSON.parse(motherInfo);
  const birthCompanionData = JSON.parse(birthCompanion);
  const babyInfoData = JSON.parse(babyInfo);
  const medicalHistory = {
    details,
    medication,
    operations,
    allergies,
    conditions,
    familyHistory,
    tbSymptomsScreen,
  };

  try {
    await createMotherInfoData(
      motherInfoData,
      birthCompanionData,
      babyInfoData,
      medicalHistory
    );
  } catch (error) {
    throw new Error("Error creating MotherInfo:" + error);
  }

  redirect("/first-appointment");
}

export const createMotherInfoData = async (
  motherInfoData: IMotherInfo,
  birthCompanion: IBirthCompanion,
  babyInfo: IBabyInfo,
  medicalHistory: IMedicalHistory
) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;
  await MotherInfo.create({
    ...motherInfoData,
    dateOfBirth: new Date(motherInfoData.dateOfBirth),
    lastMenstrualDate: new Date(motherInfoData.lastMenstrualDate),
    userId: new Types.ObjectId(userId),
  });
  await BirthCompanion.create({
    ...birthCompanion,
    dateOfBirth: new Date(motherInfoData.dateOfBirth),
    userId: new Types.ObjectId(userId),
  });
  await BabyInfo.create({ ...babyInfo, motherId: new Types.ObjectId(userId) });
  await MedicalHistory.create({
    ...medicalHistory,
    userId: new Types.ObjectId(userId),
  });
};
