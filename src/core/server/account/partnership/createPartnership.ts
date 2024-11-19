"use server";

import { db } from "@/core/client/client";
import { Partnerships } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import getSessionOrRedirect from "../../utils/getSessionOrRedirect";

const PartnershipSchema = z.object({
  additionalComments: z.string(),
  briefRequirements: z.string(),
  dealDetails: z.string(),
  clientName: z.string(),
});
export const createPartnership = async (
  values: Pick<
    Partnerships,
    "additionalComments" | "briefRequirements" | "dealDetails"
  >
) => {
  const validatedFields = PartnershipSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields." };
  const session = await getSessionOrRedirect();

  try {
    await db.partnerships.create({
      data: {
        ...validatedFields.data,
        user: { connect: { id: session.user.id } },
      },
    });
    // to ravalidate the path where the partnerships details are fetched?
    // revalidatePath("/account/helpdesk");

    return { success: "Partnership created Succesfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
