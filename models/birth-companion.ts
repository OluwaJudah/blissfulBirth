import type { IBirthCompanion } from "@/definitions/mother-info";
import mongoose, { Schema, Document, Model } from "mongoose";

 interface BirthCompanion extends Document, IBirthCompanion {
  userId: string;
}

const BirthCompanionSchema = new Schema<BirthCompanion>(
  {
    fullName: { type: String, required: true },
    userId: { type: String, required: true },
    surname: { type: String, required: true },
    maidenName: { type: String },
    idPassportNo: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    countryOfOrigin: { type: String, required: true },
    occupation: { type: String },
  },
  { timestamps: true }
);

const BirthCompanion: Model<IBirthCompanion> =
  mongoose.models.BirthCompanion ||
  mongoose.model<BirthCompanion>("BirthCompanion", BirthCompanionSchema);

export default BirthCompanion;
