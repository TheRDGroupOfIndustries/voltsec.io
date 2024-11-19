"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { db } from "@/core/client/client";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import * as z from "zod";

const FormSchema = z.object({
  subject: z.string(),
  text: z.string(),
  to: z.string(),
});

export const CreateMailAction = async (values: z.infer<typeof FormSchema>) => {
  const validatedFields = FormSchema.safeParse(values);
  const session = await getServerSession(authOptions);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { subject, text, to } = validatedFields.data;
  try {
    // await db.mail.create({
    //   data: {
    //     from: session?.user?.email!,
    //     name: session?.user?.name!,
    //     User: {
    //       connect: {
    //         email: session?.user?.email!,
    //       },
    //     },
    //     subject,
    //     text,
    //     to,
    //   },
    // });
    // revalidateTag("/dashboard/helpdesk/inbox");
    return { success: "Mail Sent successfully." };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
