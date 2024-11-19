"use server";

import { db } from "@/core/client/client";
import { Contacts } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createContacts = async (values: Omit<Contacts, "id">) => {
  try {
    await db.contacts.create({
      data: {
        ...values,
      },
    });
    // revalidatePath("/account/Contacts");

    return { success: "Contacts created successfully." };
  } catch (_error) {
    return { error: "Something went wrong in Contacts Creation." };
  }
};
