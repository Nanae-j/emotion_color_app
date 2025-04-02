// app/actions.js
"use server";

import { revalidatePath } from "next/cache";

export async function revalidateUser() {
  revalidatePath("/");
  return { success: true };
}
