"use server";
import { registerUserformSchema, RegisterUserState } from "@/lib/definitions";
import bcrypt from "bcrypt";
import User from "@/models/user";
import dbConnect from "@/lib/db";
import { redirect } from "next/navigation";

export async function regsiterUser(
  prevState: RegisterUserState | undefined,
  formData: FormData
) {
  await dbConnect();
  const validatedFields = registerUserformSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const state: RegisterUserState = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Oops, I think there's a mistake with your inputs.",
    };
    return state;
  }

  const { username, password } = validatedFields.data;

  try {
    const userExist = await User.findOne({ username });
    if (userExist) {
      const state: RegisterUserState = {
        errors: { username: ["User already exists"] },
      };
      return state;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      password: hashedPassword,
      authType: "credentials",
      role: "client",
    });
  } catch (error) {
    console.log("error: ", error);
  }
  redirect("/register?type=welcome");
}
