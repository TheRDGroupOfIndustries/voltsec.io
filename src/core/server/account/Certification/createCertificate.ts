"use server";

import { db } from "@/core/client/client";
import { Certificates } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createCertification = async (
  values: Omit<Certificates, "id" | "issuedDate">
) => {
  try {
    await db.certificates.create({
      data: {
        ...values,
      },
    });
    revalidatePath("/account/certificate");

    return { success: "Certification created successfully." };
  } catch (_error) {
    return { error: "Something went wrong in Certification Creation." };
  }
};
