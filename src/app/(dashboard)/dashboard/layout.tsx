// components/layout/AppLayout.tsx
import DashboardLayout from "@/components/layout/dashboard-layout";
import NextAuthProvider from "@/core/providers/Provider";
import { getCounts } from "@/components/layout/dashboardServer";
import Loading from "../../loading";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { ThemeProvider } from "next-themes";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const count = await getCounts();
  const session = await getServerSession(authOptions);

  if (
    !session ||
    !["ADMIN", "PENTESTER", "SALES"].includes(session.user?.role)
  ) {
    redirect("/");
  }

  if (!count && !session) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <NextAuthProvider>
      {/* <SendbirdProvider
      userId={session.user.id}
      appId={APP_ID}
      > */}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
        <DashboardLayout count={count}>{children}</DashboardLayout>
      </ThemeProvider>
        {/* </SendbirdProvider> */}
      <Toaster richColors />
    </NextAuthProvider>
  );
}
