"use server";

import { db } from "@/core/client/client";
import { revalidatePath } from "next/cache";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const deleteHelpdesk = async (helpdeskId: string) => {
  const session = await getSessionOrRedirect();

  try {
    await db.helpdesks.delete({
      where: { id: helpdeskId, userId: session.user.id },
    });
    revalidatePath("/account/helpdesk");
    return { success: "Helpdesk Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
