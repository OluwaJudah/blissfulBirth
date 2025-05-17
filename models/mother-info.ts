import type { IMotherInfo } from "@/definitions/mother-info";
import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface MotherInfo extends Document, IMotherInfo {
  userId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const MotherInfoSchema = new Schema<MotherInfo>(
  {
    fullName: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    surname: { type: String, required: true },
    maidenName: { type: String },
    idPassportNo: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    lastMenstrualDate: { type: Date, required: true },
    edd: { type: Date },
    contactNumber: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String },
    countryOfOrigin: { type: String, required: true },
    occupation: { type: String },
  },
  { timestamps: true }
);

const MotherInfo: Model<MotherInfo> =
  mongoose.models.MotherInfo ||
  mongoose.model<MotherInfo>("MotherInfo", MotherInfoSchema);

export default MotherInfo;
