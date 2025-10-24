// app/api/auth/check/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const token = req.cookies.get("tokenUser")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const data = jwt.verify(token, "mi_secreto");
    return NextResponse.json({ authenticated: true, user: data.user });
  } catch (err) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
