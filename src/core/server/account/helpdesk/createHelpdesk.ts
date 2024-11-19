"use server";

import { db } from "@/core/client/client";
import { Helpdesks } from "@prisma/client";
import { revalidatePath } from "next/cache";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const createHelpdesk = async (
  values: Omit<Helpdesks, "id" | "date" | "userId" | "email" | "messages">
) => {
  //   const validatedFields = FormSchema.safeParse(values);
  const session = await getSessionOrRedirect();

  try {
    await db.helpdesks.create({
      data: {
        ...values,
        email: session.user.email,
        user: { connect: { id: session.user.id } },
      },
    });
    
    revalidatePath("/account/helpdesk");

    return { success: "Helpdesk created Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};