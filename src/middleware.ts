import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (!token) return NextResponse.redirect(new URL("/auth", request.url));

  // if (token?.role !== "ADMIN" && url.pathname.startsWith("/dashboard")) {
  //   // if user is User & try to go the /dashboard redirect to the / route
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // There is dashboard is Empty page
  if (url.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/chat", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/pentest/:path*", "/account/:path*"],
};
