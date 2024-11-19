// components/layout/AppLayout.tsx
import DashboardLayout from "@/components/layout/dashboard-layout";
import NextAuthProvider from "@/core/providers/Provider";
import { getCounts } from "@/components/layout/dashboardServer";
import Loading from "../../loading";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const count = await getCounts(); // Fetch server-side data
  const session = await getServerSession(authOptions);
  console.log(session);

  // Check if session exists and if the user has admin role
  if (!session || session.user?.role !== "ADMIN") {
    redirect("/"); // Redirect to home if not an admin or no session
  }

  if (!count) {
    return (
      <div>
        <Loading />
      </div>
    ); // Handle loading state
  }

  return (
    <NextAuthProvider>
      <DashboardLayout count={count}>{children}</DashboardLayout>
      <Toaster richColors />
    </NextAuthProvider>
  );
}
