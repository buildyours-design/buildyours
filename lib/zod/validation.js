import { z } from "zod";

export const emailSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().max(100),
});

export const emailLinkingSchema = z.object({
  email: z.string().email(),
});

export const adminSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const adminSignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  profile_photo: z.string().nonempty("Profile Photo is required!"),
});
