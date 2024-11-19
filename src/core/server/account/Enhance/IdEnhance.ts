"use server";

import { db } from "@/core/client/client";
import { Enhances } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const deleteEnhance = async (Id: string) => {
  try {
    await db.enhances.delete({
      where: { id: Id },
    });
    revalidatePath("/account/enhance");
    return { success: "Enhance Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Enhance." };
  }
};

//Update

export const UpdateEnhance = async ({
  id,
  ...values
}: { id: string } & Partial<Omit<Enhances, "id">>) => {
  try {
    const updateData = await db.enhances.update({
      where: {
        id,
      },
      data: {
        ...values,
      },
    });
    if (!updateData) {
      return { success: "Error Updating Enhances." };
    }
    // revalidatePath("/account/Enhance");
    return { success: "Enhance Updated Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Enhance." };
  }
};
