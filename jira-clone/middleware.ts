import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Middleware: ", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/api/tasks/")) {
    const id = request.nextUrl.pathname.split("/").pop();
    console.log(id);
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: "/about/:path*",
  matcher: ["/api/tasks/:path"],
};
