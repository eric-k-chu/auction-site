import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export default async function middleware(req: NextRequest) {
  const session = await getSession();

  if (session === null) {
    // If session  expires when the user is on /dashboard page, navigate them back to /admin for login. Otherwise, navigate unauthorized users back to the homepage
    const absoluteURL =
      req.nextUrl.pathname === "/admin/dashboard"
        ? new URL("/admin", req.nextUrl.origin)
        : new URL("/", req.nextUrl.origin);

    return NextResponse.redirect(absoluteURL.toString());
  }
}

// Middleware function will only be ran on the paths listed in matcher
export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
