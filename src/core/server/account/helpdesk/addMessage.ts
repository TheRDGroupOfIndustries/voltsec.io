"use server";

import { db } from "@/core/client/client";
import { Helpdesks } from "@prisma/client";
import { revalidatePath } from "next/cache";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

export const sendMessage = async ({
  message,
  id,
  repliedFile
}: {
  message: string;
  id: string;
  repliedFile: string
}) => {
  //   const validatedFields = FormSchema.safeParse(values);
  const session = await getSessionOrRedirect();
  if (session.user.role !== "ADMIN")
    return { error: "Admin only can send messages" };
  try {
    await db.helpdesks.update({
      where: { id },
      data: {
        messages: {
          push: {
            from: session.user.id,
            message,
            createdAt: new Date(),
          },
        },
        status: "ongoing",
        repliedFile: repliedFile
      },
    });
    revalidatePath("/dashboard/helpdesk");

    return { success: "Message sent succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
export const sendMessageUser = async ({
  message,
  id,
}: {
  message: string;
  id: string;
}) => {
  //   const validatedFields = FormSchema.safeParse(values);
  const session = await getSessionOrRedirect();

  try {
    await db.helpdesks.update({
      where: { id, userId: session.user.id },
      data: {
        messages: {
          push: {
            from: session.user.id,
            message,
            createdAt: new Date(),
          },
        },
        status: "ongoing",
      },
    });
    revalidatePath("/account/helpdesk");

    return { success: "Message sent succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
