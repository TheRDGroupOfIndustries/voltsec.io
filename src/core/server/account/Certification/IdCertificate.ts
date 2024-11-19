"use server";

import { db } from "@/core/client/client";
import { Certificates } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const deleteCertification = async (Id: string) => {
  try {
    await db.certificates.delete({
      where: { id: Id },
    });
    revalidatePath("/account/certificate");
    return { success: "Certification Deleted Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Certification." };
  }
};

//Update

export const UpdateCertification = async ({
  id,
  ...values
}: { id: string } & Partial<Omit<Certificates, "id">>) => {
  try {
    const updateData = await db.certificates.update({
      where: {
        id,
      },
      data: {
        ...values,
      },
    });
    if (!updateData) return { error: "Error updating Certificate." };
    revalidatePath("/account/certificate");
    return { success: "Certification Updated Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong in Certification." };
  }
};
