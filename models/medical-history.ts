import type { IMedicalHistory } from "@/definitions/mother-info";
import mongoose, { Schema, Document, Model } from "mongoose";

export interface MedicalHistory extends Document, IMedicalHistory {
  userId: string;
}

const MedicalHistorySchema = new Schema<MedicalHistory>(
  {
    details: { type: String },
    userId: { type: String },
    medication: { type: String },
    operations: { type: String },
    allergies: { type: String },
    conditions: { type: String },
    familyHistory: { type: String },
    tbSymptomsScreen: { type: String },
  },
  { timestamps: true }
);

const MedicalHistory: Model<MedicalHistory> =
  mongoose.models.MedicalHistory ||
  mongoose.model<MedicalHistory>("MedicalHistory", MedicalHistorySchema);

export default MedicalHistory;
