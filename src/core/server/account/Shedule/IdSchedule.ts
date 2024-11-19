"use server";

import { db } from "@/core/client/client";
import { revalidatePath } from "next/cache";

export const deleteSchedule = async (Id: string) => {
 
  try {
    await db.shedulePentest.delete({
      where: { id: Id, },
    });
    revalidatePath("/account/ShedulePentest");
    return { success: "Shedule Pentest Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Shedule Pentest." };
  }
};

//Update

export const UpdateSchedule = async (Id: string,request : Request ) => {
 
  try {
    const body = await request.json();
    const updateData = await db.shedulePentest.update({
        where: {
          id : Id,
        },
        data: {
          ...body
        },
      })
      if (!updateData) {
        return { success: "Shedule Pentest Not Updated."}
      }
    revalidatePath("/account/ShedulePentest");
    return { success: "Shedule Pentest Deleted Updated." };
  } catch (_error) {
    return { error: "Something went wrong in Shedule Pentest." };
  }
};