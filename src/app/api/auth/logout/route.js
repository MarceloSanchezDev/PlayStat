import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true, message: "Sesión cerrada" });
  res.cookies.set("tokenUser", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return res;
}
