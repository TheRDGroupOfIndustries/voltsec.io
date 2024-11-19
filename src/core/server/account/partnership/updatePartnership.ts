"use server";

import { db } from "@/core/client/client";
import { Partnerships } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

type Input = {
  id: string;
} & Omit<Partnerships, "id" | "user" | "userId">;

export const updatePartnership = async (values: Input) => {
  const session = await getSessionOrRedirect();

  try {
    await db.partnerships.update({
      where: { id: values.id, userId: session.user.id },
      data: {
        ...values,
      },
    });
    // to ravalidate the path where the partnerships details are fetched?
    // revalidatePath("/account/helpdesk");

    return { success: "Partnership updated Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
