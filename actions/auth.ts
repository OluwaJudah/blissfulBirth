"use server";
import { registerUserformSchema, RegisterUserState } from "@/lib/definitions";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { createUser } from "./user";
import { isUserExists } from "@/data/user";

export async function regsiterUser(
  prevState: RegisterUserState | undefined,
  formData: FormData
) {
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
    const isUserExist = await isUserExists(username);
    if (isUserExist) {
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
    const user = await createUser(username, hashedPassword);
    await createSession(user.id);
  } catch (error) {
    console.log("error: ", error);
  }

  redirect("/welcome");
}

export async function logout() {
  deleteSession();
  redirect("/");
}
