"use server";

import { db } from "@/core/client/client";
import { Certificates } from "@prisma/client";

export const getCertificate = async ({ eId }: Pick<Certificates, "eId">) => {
  try {
    const certificate = await db.certificates.findFirst({ where: { eId } });
    // revalidatePath("/account/Certification");

    return { certificate };
  } catch (_error) {
    return { error: "Something went wrong while finding certificate." };
  }
};
