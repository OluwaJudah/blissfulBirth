import type { IBabyInfo } from "@/definitions/mother-info";
import mongoose, { Schema, Document, Model } from "mongoose";

interface BabyInfo extends Document, IBabyInfo {
  motherId: string;
}

const BabyInfoSchema = new Schema<BabyInfo>(
  {
    fullName: {type: String, },
    surname: {type: String, },
    motherId: {type: String, },
  },
  { timestamps: true }
);

const BabyInfo: Model<BabyInfo> =
  mongoose.models.BabyInfo ||
  mongoose.model<BabyInfo>("BabyInfo", BabyInfoSchema);

export default BabyInfo;
