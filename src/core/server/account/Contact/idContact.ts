"use server";

import { db } from "@/core/client/client";
import { Contacts } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const deleteContacts = async (Id: string) => {
  try {
    await db.contacts.delete({
      where: { id: Id },
    });
    // revalidatePath("/account/Contacts");
    return { success: "Contacts  Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Contacts." };
  }
};

//Update

export const UpdateContacts = async ({
  id,
  ...values
}: { id: string } & Partial<Omit<Contacts, "id">>) => {
  try {
    const updateData = await db.contacts.update({
      where: {
        id,
      },
      data: {
        ...values,
      },
    });
    if (!updateData) {
      return { success: "Error Updating Contacts." };
    }
    // revalidatePath("/account/Contacts");
    return { success: "Contacts Updated Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Contacts." };
  }
};
