"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    nombre: "",
    apellido: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Chequeo de sesión por cookie httpOnly vía /api/auth/check
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/auth/check", { method: "GET" });
        // Si 200, ya está autenticado
        if (res.ok) {
          const data = await res.json();
          if (alive && data?.authenticated) {
            router.replace("/dashboard");
          }
        }
      } catch {
        // silencio: si falla el check no bloqueamos el login
      }
    })();
    return () => {
      alive = false;
    };
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMsg("");

    if (!formdata.username.trim()) {
      setError("El nombre de usuario no debe estar vacío");
      return;
    }
    if (!formdata.password.trim()) {
      setError("La contraseña no debe estar vacía");
      return;
    }
    if (!formdata.apellido.trim()) {
      setError("El apellido del usuario no debe estar vacío");
      return;
    }
    if (!formdata.nombre.trim()) {
      setError("El nombre del usuario no debe estar vacío");
      return;
    }
    if (!formdata.email.trim()) {
      setError("El Email del usuario no debe estar vacío");
      return;
    }
    if (formdata.password !== formdata.passwordConfirm) {
      setError("La contraseñas deben coincidir");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Tu API espera { formdata }, así que lo mantenemos
        body: JSON.stringify({ formdata }),
        // Nota: para mismo dominio, las cookies se envían por defecto (same-origin).
        // credentials: "include", // sólo si cambias de dominio/subdominio
      });

      const data = await res
        .json()
        .then((res) => console.log(res))
        .catch(() => ({}));

      if (!res.ok) {
        setError(data?.message || "Error al iniciar sesión");
        setLoading(false);
        return;
      }

      setMsg(data?.message || "Registro exitoso");
      // Fuerza navegación (y ejecuta de nuevo el middleware)
      router.replace("/dashboard");
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const styleInput = " h-10 p-3 border rounded";
  const styleLabel = " flex flex-wrap gap-2 ";
  const fieldsetStyle = "flex gap-5 w-50";

  return (
    <main className="flex flex-col justify-center items-center content-center wh-100 mt-10 p-5">
      <h1 className="text-center mb-3">Registro</h1>
      <p className="text-center">Registrate para poder Genera Datos</p>

      <form
        className="flex flex-col flex-wrap justify-center content-center gap-4 m-5 border rounded p-10"
        onSubmit={handleSubmit}
      >
        <fieldset className={fieldsetStyle}>
          <label htmlFor="name" className={styleLabel}>
            nombre :
            <input
              onChange={(e) =>
                setFormData({ ...formdata, nombre: e.target.value })
              }
              id="name"
              type="text"
              placeholder="nombre "
              className={styleInput}
              autoComplete="name"
            />
          </label>
          <label htmlFor="apellido" className={styleLabel}>
            apellido:
            <input
              onChange={(e) =>
                setFormData({ ...formdata, apellido: e.target.value })
              }
              id="apellido"
              type="text"
              placeholder="apellido"
              className={styleInput}
              autoComplete="apellido"
            />
          </label>
        </fieldset>
        <fieldset className={fieldsetStyle}>
          <label htmlFor="email" className={styleLabel}>
            email:
            <input
              onChange={(e) =>
                setFormData({ ...formdata, email: e.target.value })
              }
              id="email"
              type="email"
              placeholder="email@dominio.com"
              className={styleInput}
              autoComplete="email"
            />
          </label>
          <label htmlFor="username" className={styleLabel}>
            nombre de usuario:
            <input
              onChange={(e) =>
                setFormData({ ...formdata, username: e.target.value })
              }
              id="username"
              type="text"
              placeholder="nombre de usuario"
              className={styleInput}
              autoComplete="username"
            />
          </label>
        </fieldset>
        <fieldset className={fieldsetStyle}>
          <label htmlFor="password" className={styleLabel}>
            contraseña :
            <input
              onChange={(e) =>
                setFormData({ ...formdata, password: e.target.value })
              }
              id="password"
              type="password"
              placeholder="contraseña"
              className={styleInput}
              autoComplete="current-password"
            />
          </label>
          <label htmlFor="passwordConfirm" className={styleLabel}>
            repetir contraseña :
            <input
              onChange={(e) =>
                setFormData({ ...formdata, passwordConfirm: e.target.value })
              }
              id="passwordConfirm"
              type="password"
              placeholder="repetir contraseña"
              className={styleInput}
              autoComplete="current-password"
            />
          </label>
        </fieldset>

        {error && (
          <div className="flex justify-center content-center">
            <span className="w-100 text-center text-red-600">{error}</span>
          </div>
        )}

        {msg && (
          <span className="transition delay-150 w-100 text-center text-green-600">
            {msg}
          </span>
        )}

        <button
          type="submit"
          className="border rounded-sm p-2 hover:bg-sky-700 flex justify-center content-center disabled:opacity-50"
          disabled={loading}
        >
          {loading && (
            <svg
              className="mr-3 -ml-1 size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          Registrarse
        </button>
      </form>
    </main>
  );
}
