import clientPromise from "@/lib/db";

export async function GET(request: Request, res: Response) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix"); // Replace with your DB name
    const collection = db.collection("users"); // Replace with your collection

    const data = await collection.find({}).limit(10).toArray();
    return Response.json({ message: data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
