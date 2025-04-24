import { verifySession } from "@/lib/dal";
import dbConnect from "@/lib/db";
import PaymentEntry from "@/models/payment-history";
import { Types } from "mongoose";
import { unstable_noStore as noStore } from "next/cache";

export async function getPayments() {
  noStore();
  await dbConnect();
  const session = await verifySession();
  if (!session) return null;

  const userId = session?.userId as string;

  try {
    const paymentEntries = await PaymentEntry.find(
      {
        userId: new Types.ObjectId(userId),
      },
      "type amount createdAt"
    );
    
    return paymentEntries.map(({ _id, type, createdAt, amount }: any) => ({
      id: _id.toString(),
      type,
      date: createdAt.toLocaleDateString(),
      amount,
    }));
  } catch (error) {
    console.log("error: ", error);
  }
}
