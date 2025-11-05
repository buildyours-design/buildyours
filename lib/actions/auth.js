"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { headers } from "next/headers";
import { signIn } from "../../auth";
import { User } from "../../database/models/User";

export const signInWithCredentials = async (params) => {
  const { email, password } = params;
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};

export const signUp = async (params) => {
  const { email, password, profilePhoto } = params;
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

  console.log(params, "admin_user");

  const existingUser = await User.findOne({
    email,
  });
  console.log(existingUser, "existingUser");

  if (existingUser) {
    return { success: false, error: "User already exists" };
  }
  const hashedPassword = await hash(password, 10);
  console.log(hashedPassword, "hashedPassword");
};
