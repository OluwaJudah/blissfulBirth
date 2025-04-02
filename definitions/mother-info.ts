import { z } from "zod";

export const motherInfoFormSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full Name is required." }).trim(),
    surname: z.string().min(2, { message: "Surname is required." }).trim(),
    maidenName: z.string().trim(),
    idPassportNo: z
      .string()
      .min(2, {
        message: "ID / Passport Number is required.",
      })
      .trim(),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    lastMenstrualDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    contactNumber: z
      .string()
      .min(6, {
        message: "Contact Number is required",
      })
      .regex(/[0-9]/, { message: "Contain only number between 0 - 9." })
      .trim(),
    email: z.string(),
    countryOfOrigin: z
      .string()
      .min(6, {
        message: "Country of Origin is required",
      })
      .trim(),
    occupation: z.string().trim(),
  })
  .superRefine(({ contactNumber }, ctx) => {
    if (contactNumber !== "" && !contactNumber.startsWith("0")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Contact Number must start with 0. E.g 067 123 4545.",
        path: ["contactNumber"],
      });
    }
  });

export type MotherInfoForm = z.infer<typeof motherInfoFormSchema>;

export const birthCompanionSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full Name is required." }).trim(),
    surname: z.string().min(2, { message: "Surname is required." }).trim(),
    maidenName: z.string().trim(),
    idPassportNo: z
      .string()
      .min(2, {
        message: "ID / Passport Number is required.",
      })
      .trim(),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    contactNumber: z
      .string()
      .min(6, {
        message: "Contact Number is required",
      })
      .regex(/[0-9]/, { message: "Contain only number between 0 - 9." })
      .trim(),
    email: z.string(),
    countryOfOrigin: z
      .string()
      .min(6, {
        message: "Country of Origin is required",
      })
      .trim(),
    occupation: z.string().trim(),
  })
  .superRefine(({ contactNumber }, ctx) => {
    if (contactNumber !== "" && !contactNumber.startsWith("0")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Contact Number must start with 0. E.g 067 123 4545.",
        path: ["contactNumber"],
      });
    }
  });

export type BirthCompanionForm = z.infer<typeof birthCompanionSchema>;

export const babyInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name is required." }).trim(),
  surname: z.string().min(2, { message: "Surname is required." }).trim(),
});

export type BabyInfoForm = z.infer<typeof babyInfoSchema>;

export const medicalHistorySchema = z.object({
  details: z
    .string()
    .min(6, { message: "Details must be at leaast 6 characters long." })
    .trim(),
  medication: z
    .string()
    .min(6, { message: "Medication must be at leaast 6 characters long." })
    .trim(),
  operations: z
    .string()
    .min(6, { message: "Operations must be at leaast 6 characters long." })
    .trim(),
  allergies: z
    .string()
    .min(6, { message: "Allergies must be at leaast 6 characters long." })
    .trim(),
});

export type MedicalHistoryForm = z.infer<typeof medicalHistorySchema>;

export type MedicalHistory = {
  details: string;
  medication: string;
  operations: string;
  allergies: string;
  conditions: string;
  familyHistory: string;
  tbSymptomsScreen: string;
};

export type BirthCompanion = {
  fullName: string;
  surname: string;
  maidenName: string;
  idPassportNo: string;
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  countryOfOrigin: string;
  occupation: string;
};

export type MotherInfo = BirthCompanion & {
  lastMenstrualDate: string;
};

export type BabyInfo = {
  fullName: string;
  surname: string;
};
