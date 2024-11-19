"use server";

import { db } from "@/core/client/client";
import { revalidatePath } from "next/cache";

export const deleteVerification = async (Id: string) => {
 
  try {
    await db.verification.delete({
      where: { id: Id, },
    });
    revalidatePath("/account/Verification");
    return { success: "Verification  Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Verification." };
  }
};

//Update

export const UpdateVerification = async (Id: string,request : Request ) => {
 
  try {
    const body = await request.json();
    const updateData = await db.verification.update({
        where: {
          id : Id,
        },
        data: {
          ...body
        },
      })
      if (!updateData) {
        return { success: "Verification Not Updated."}
      }
    revalidatePath("/account/Verification");
    return { success: "Verification Deleted Updated." };
  } catch (_error) {
    return { error: "Something went wrong in Verification ." };
  }
};