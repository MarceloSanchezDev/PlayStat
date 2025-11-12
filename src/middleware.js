import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname, search } = req.nextUrl;
  const token = req.cookies.get("tokenUser")?.value;
  // 👈 seguro y reutilizable
  console.log("TOKEN:", token);
  // 🔒 Si intenta acceder al dashboard sin token → redirigir a login
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("from", pathname + (search || ""));
      return NextResponse.redirect(url);
    }
  }

  // 🚫 Si intenta entrar a login estando logueado → redirigir al dashboard
  if (pathname.startsWith("/login") && token) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    url.searchParams.set("from", pathname + (search || ""));
    return NextResponse.redirect(url);
  }

  // ✅ Si todo está bien, deja pasar la petición
  const res = NextResponse.next();
  res.headers.set("x-debug-token", token || "sin token");
  return res;
}

// 🧩 Configura en qué rutas se ejecuta
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/login/:path*"],
};
