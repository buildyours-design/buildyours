"use server";

import { auth } from "../auth";

export const checkIsAuthenticated = async () => {
  const session = await auth();
  console.log(session, "session of the user");
  if (!session) return false;
  return true;
};
