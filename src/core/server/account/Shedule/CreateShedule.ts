"use server";

import { db } from "@/core/client/client";
import { ShedulePentest } from "@prisma/client";
import { revalidatePath } from "next/cache";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const createShedulePentest = async (
  values: Omit<ShedulePentest, "id" | "time" | "emailReportTo">
) => {
  const session = await getSessionOrRedirect();
  try {
    await db.shedulePentest.create({
      data: {
        ...values,
        emailReportTo: session.user.email,
      },
    });
    revalidatePath("/account/ShedulePentest");

    return { success: "Shedule Pentest created successfully." };
  } catch (_error) {
    return { error: "Something went wrong in Shedule Creation." };
  }
};

export const createSheduleDashboard = async (
  values: Omit<ShedulePentest, "id"  >
) => {
 
  try {
    await db.shedulePentest.create({
      data: {
        ...values,
      },
    });
    revalidatePath("/dashboard/shedule");

    return { success: "Shedule created successfully in Dashboard." };
  } catch (_error) {
    return { error: "Something went wrong in Shedule Creation in Dashboard." };
  } 
};
