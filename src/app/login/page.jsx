"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import FormComponent from "../components/form/FormComponent";
import ButtomForm from "../components/buttom/ButtomForm";
import TitleFom from "../components/form/components/TitleFom";
import InputForm from "../components/form/components/InputForm";
import LabelForm from "../components/form/components/LabelForm";
import SectionForm from "../components/form/components/SectionForm";
import MainComponent from "../components/mainComponent";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const { login } = useUser();
  const router = useRouter();

  const [formdata, setFormData] = useState({ username: "", password: "" });
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
          login()
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
    login();
    if (!formdata.username.trim()) {
      setError("El nombre de usuario no debe estar vacío");
      return;
    }
    if (!formdata.password.trim()) {
      setError("La contraseña no debe estar vacía");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Tu API espera { formdata }, así que lo mantenemos
        body: JSON.stringify({ formdata }),
        // Nota: para mismo dominio, las cookies se envían por defecto (same-origin).
        // credentials: "include", // sólo si cambias de dominio/subdominio
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.message || "Error al iniciar sesión");
        setLoading(false);
        return;
      }

      setMsg(data?.message || "Login exitoso");
      // Fuerza navegación (y ejecuta de nuevo el middleware)
      router.replace("/dashboard");
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainComponent>
      <Suspense fallback={<div>Cargando...</div>}>
         <SectionForm>
        <TitleFom title={"Login"} />
        <p className="text-center font-bold">
          Inicia sesión para poder acceder a tus datos
        </p>

        <FormComponent
          className="flex flex-col flex-wrap justify-center content-center gap-4  p-10"
          handleSubmit={handleSubmit}
        >
          <LabelForm htmlFor="username" title={"Nombre de Usuario :"}>
            <InputForm
              onChange={(e) =>
                setFormData({ ...formdata, username: e.target.value })
              }
              id="username"
              type="text"
              placeholder="nombre de usuario"
            />
          </LabelForm>

          <LabelForm htmlFor="password" title={"Contraseña :"}>
            <InputForm
              onChange={(e) =>
                setFormData({ ...formdata, password: e.target.value })
              }
              id="password"
              type="password"
              placeholder="contraseña"
            />
          </LabelForm>

          {error && (
            <div className="flex justify-center content-center">
              <span className="w-100 text-center text-red-600 font-bold">
                {error}
              </span>
            </div>
          )}

          {msg && (
            <span className="transition delay-150 w-100 text-center text-green-600 font-bold">
              {msg}
            </span>
          )}
          <fieldset className="flex gap-2">
            <input type="checkbox" name="record" id="record" />
            <label htmlFor="record">Recordame</label>
          </fieldset>
          <ButtomForm title={"Iniciar Sesion"} loading={loading} />
          <Link href="/forgotPassword">Olvide mi contraseña</Link>
        </FormComponent>
      </SectionForm>
        </Suspense>
      
      <p className="mt-5">
        Si no tienes una cuenta todavia,
        <Link
          href="/register"
          className="text-red-600 font-bold sectionAnimated"
        >
          {" "}
          Registrate.
        </Link>
      </p>
    </MainComponent>
  );
}
