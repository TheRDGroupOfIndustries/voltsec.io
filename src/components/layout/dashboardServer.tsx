"use server"
import { db } from "@/core/client/client";

export async function getCounts() {
  const [user, pentest, helpdesk,certificates,shedule] = await Promise.all([
    db.user.count(),
    db.pentest.count(),
    db.helpdesks.count(),
    db.certificates.count(),
    db.shedulePentest.count()
  ]);

  return {
    user,
    pentest,
    helpdesk,
    certificates,
    shedule  };
}
