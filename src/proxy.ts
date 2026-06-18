import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  if (searchParams.get("lang") === "en") {
    const url = req.nextUrl.clone();
    url.searchParams.delete("lang");
    url.pathname = pathname.startsWith("/en") ? pathname : "/en";
    return NextResponse.redirect(url, 301);
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
