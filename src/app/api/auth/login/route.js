import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(req) {
  //lo recibe como un objeto
  const { formdata } = await req.json();
  if (formdata.username == "1234" && formdata.password == "1234") {
    const res = NextResponse.json(
      {
        message: "Inicio de Sesion Exitoso! 👋",
        at: new Date().toISOString(),
      },
      { status: 200 }
    );
    const token = jwt.sign({ user: formdata.username }, "mi_secreto", {
      expiresIn: "1h",
    });
    res.cookies.set("tokenUser", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1h
    });
    return res;
  }

  const res = NextResponse.json(
    {
      message: "Usuario o contraseña incorrecta",
      at: new Date().toISOString(),
    },
    { status: 400 }
  );

  return res;
}
