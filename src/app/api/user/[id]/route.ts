import { NextResponse } from "next/server";
import { db } from "@/core/client/client";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const userId = params.id;

  try {
    // Attempt to delete the user with the specified ID
    const deletedUser = await db.user.delete({
      where: { id: userId },
    });

    // Return a successful response
    return NextResponse.json({ message: "User deleted successfully", user: deletedUser }, { status: 200 });
  } catch (error:any) {
    console.error("Failed to delete user:", error);

    // Handle cases where the user isn't found or another error occurs
    return NextResponse.json({ message: "Failed to delete user", error: error.message }, { status: 500 });
  }
}
