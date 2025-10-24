import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hola desde la API 👋",
    at: new Date().toISOString(),
  });
}

export async function POST(req) {
  try {
    const { name } = await req.json();
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { ok: false, error: "Body inválido. Esperado: { name: string }" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        greetings: `Hola, ${name}!`,
        at: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "JSON inválido" },
      { status: 400 }
    );
  }
}
