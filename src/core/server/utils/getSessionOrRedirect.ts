import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { useSession } from "next-auth/react";

export default async function getSessionOrRedirect() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/auth");
  return session;
}
