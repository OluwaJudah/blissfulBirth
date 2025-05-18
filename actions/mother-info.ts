"use server";
import { redirect } from "next/navigation";
import {
  CreateMotherInfoFormState,
  createMotherInfoSchema,
  IMedicalHistory,
  IBabyInfo,
  IBirthCompanion,
  IMotherInfo,
  MedicalHistoryFormState,
  medicalHistoryFormSchema,
} from "@/definitions/mother-info";
import MotherInfo from "@/models/mother-info";
import dbConnect from "@/lib/db";
import { verifySession } from "@/lib/dal";
import BirthCompanion from "@/models/birth-companion";
import BabyInfo from "@/models/baby-info";
import MedicalHistory from "@/models/medical-history";
import { Types } from "mongoose";
import { PENDING_PATIENT } from "@/constants/appointment";
import { revalidatePath } from "next/cache";

export async function createMotherInfo(
  motherInfo: IMotherInfo,
  birthCompanion: IBirthCompanion,
  babyInfo: IBabyInfo,
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
  } = validatedFields.data;

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
      motherInfo,
      birthCompanion,
      babyInfo,
      medicalHistory
    );
  } catch (error) {
    throw new Error("Error:" + error);
  }

  redirect("/new-intake");
}

export const createMotherInfoData = async (
  motherInfo: IMotherInfo,
  birthCompanion: IBirthCompanion,
  babyInfo: IBabyInfo,
  medicalHistory: IMedicalHistory
) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  try {
    await MotherInfo.create({
      ...motherInfo,
      status: PENDING_PATIENT,
      dateOfBirth: new Date(motherInfo.dateOfBirth),
      lastMenstrualDate: new Date(motherInfo.lastMenstrualDate),
      userId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating MotherInfo:" + error);
  }

  try {
    await BirthCompanion.create({
      ...birthCompanion,
      dateOfBirth: new Date(motherInfo.dateOfBirth),
      userId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating BirthCompanion:" + error);
  }

  try {
    await BabyInfo.create({
      ...babyInfo,
      motherId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating BabyInfo:" + error);
  }

  try {
    await MedicalHistory.create({
      ...medicalHistory,
      userId: new Types.ObjectId(userId),
    });
  } catch (error) {
    throw new Error("Error creating MedicalHistory:" + error);
  }
};

export async function updateMedicalReport(
  conditions: string,
  familyHistory: string,
  tbSymptomsScreen: string,
  pathname: string,
  prevState: MedicalHistoryFormState | undefined,
  formData: FormData
) {
  const validatedFields = medicalHistoryFormSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: MedicalHistoryFormState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }

  const { details, allergies, operations, medication } = validatedFields.data;

  try {
    await updateMedicalHistoryData({
      details,
      allergies,
      operations,
      medication,
      conditions,
      familyHistory,
      tbSymptomsScreen,
    });
  } catch (err) {
    console.log(`Error: updating medical history and ${err}`);
    throw Error(`Error: updating medical history and ${err}`);
  }

  revalidatePath(pathname);
}

const updateMedicalHistoryData = async (data: IMedicalHistory) => {
  await dbConnect();

  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  const medicalHistory = await MedicalHistory.findOneAndUpdate(
    { userId: new Types.ObjectId(userId) }, // Filter
    { $set: { ...data } },
    {
      new: true, // Return the updated document
      upsert: true, // Create if it doesn't exist
      runValidators: true, // Apply schema validations
    }
  );
  return medicalHistory;
};
