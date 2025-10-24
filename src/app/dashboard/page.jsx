"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  async function logout() {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();
    setMsg(data.message);
    router.replace("/login");
  }

  return (
    <main style={{ maxWidth: 720, margin: "2rem auto" }}>
      <h1>Zona privada: Dashboard</h1>
      <p>Bienvenido, estás autenticado.</p>
      <button
        onClick={logout}
        style={{ marginTop: "1rem" }}
        className="border rounded-sm p-2"
      >
        Cerrar sesión
      </button>
      {msg && <p>{msg}</p>}
    </main>
  );
}
