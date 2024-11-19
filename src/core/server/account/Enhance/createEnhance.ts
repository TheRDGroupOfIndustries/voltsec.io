"use server";

import { db } from "@/core/client/client";
import { Enhances } from "@prisma/client";
import { revalidatePath } from "next/cache";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const createEnhance = async (
  values: Omit<Enhances, "id" | "email" | "User" | "userId">
) => {
  const session = await getSessionOrRedirect();
  try {
    await db.enhances.create({
      data: {
        ...values,
        email: session.user.email,
        User: { connect: { id: session.user.id } },
      },
    });
    revalidatePath("/account/enhance");

    return { success: "Enhances created successfully." };
  } catch (_error) {
    return { error: "Something went wrong in Enhances Creation." };
  }
};
