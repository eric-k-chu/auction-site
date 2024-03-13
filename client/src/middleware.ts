import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/notadmin"];

export default function middleware(req: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    protectedRoutes.includes(req.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
