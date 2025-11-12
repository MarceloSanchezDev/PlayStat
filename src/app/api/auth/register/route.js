import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export async function POST(req) {
  //lo recibe como un objeto
  const { formdata } = await req.json();

  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(formdata.password, salt);

  console.log(`usuario : ${formdata.username} `, `pass : ${hashPass} `);

  const res = NextResponse.json(
    {
      message: "Registro Exitoso! 👋",
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
