import { InboxMail } from "@/components/helpdesks/inbox/inbox-mail";
import { db } from "@/core/client/client";
import { Helpdesks, Prisma } from "@prisma/client";

export type HelpDeskData = Prisma.HelpdesksGetPayload<{
  include: { user: { select: { id: true; image: true }, file: string} };
}>;

export default async function HelpdeskPage() {
  const helpdesks = await db?.helpdesks?.findMany({
    include: { user: { select: { id: true, image: true } } },
    orderBy: { date: "desc" },
  });

  return <InboxMail helpdesks={helpdesks || []} />;
}
