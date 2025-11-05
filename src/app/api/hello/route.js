import { NextResponse } from "next/server";
import { testFunction } from "../../lib/test.js";
export async function GET() {
  const testMessage = testFunction();
  return NextResponse.json({
    message: testMessage,
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
