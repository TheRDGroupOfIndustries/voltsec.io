"use server";

import { db } from "@/core/client/client";
import { Partnerships } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const deletePartnership = async (id: string) => {
  const session = await getSessionOrRedirect();

  try {
    await db.partnerships.delete({
      where: { id, userId: session.user.id },
    });
    // to ravalidate the path where the partnerships details are fetched?
    // revalidatePath("/account/helpdesk");

    return { success: "Partnership updated Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
