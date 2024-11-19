import { db } from "@/core/client/client";

export const getUserRole = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    return { userRole: user?.role ?? "USER" };
  } catch (_error) {
    return { error: "Something went wrong." };
  }
};
