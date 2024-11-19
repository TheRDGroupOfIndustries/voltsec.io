"use server";

import { db } from "@/core/client/client";
import { Verification } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createVerification = async (
  values: Omit<Verification, "id">
) => {
  try {
    await db.verification.create({
      data: {
        ...values,
      },
    });
    revalidatePath("/account/Verification");

    return { success: "Verification  created successfully." };
  } catch (_error) {
    return { error: "Something went wrong in Verification Creation." };
  }
};
