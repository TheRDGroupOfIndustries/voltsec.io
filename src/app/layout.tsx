import type { Metadata, Viewport } from "next";
import { cn } from "@/core/lib/utils";
import { Poppins } from "next/font/google";
import "@/resource/styles/globals.css";
import NextAuthProvider from "@/core/providers/Provider";
import { useEffect } from "react";
import DisableInspect from "@/components/DisableInspect";

export const viewport: Viewport = {
  themeColor: "#000",
  viewportFit: "cover",
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: true,
};

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voltsec.io"),
  title: "VoltSec.io | Cyber Security PTaaS",
  description:
    "At VoltSec, we are dedicated to providing cutting-edge cybersecurity solutions that empower businesses to stay ahead of evolving digital threats. With our advanced deep learning technology and a team of expert cybersecurity professionals",
  keywords: [
    "voltsec",
    "voltsec-io",
    "voltsec.io",
    "pentest",
    "penetration testing",
    "PTaaS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen h-full overflow-x-hidden bg-background font-sans slashed-zero  antialiased ",
          fontSans.variable
        )}
      >

        <NextAuthProvider>
        {/* <DisableInspect> */}
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          {children}
          {/* </ThemeProvider> */}
            {/* </DisableInspect> */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
