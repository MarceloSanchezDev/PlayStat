"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormComponent from "../components/form/FormComponent";
import ButtomForm from "../components/buttom/ButtomForm";
import TitleFom from "../components/form/components/TitleFom";
import InputForm from "../components/form/components/InputForm";
import LabelForm from "../components/form/components/LabelForm";
import Link from "next/link";
import SectionForm from "../components/form/components/SectionForm";
import MainComponent from "../components/mainComponent";

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

  const fieldsetStyle = "flex gap-5 w-50";

  return (
    <MainComponent>
      <SectionForm>
        <TitleFom title={"Registro"} />
        <p className="text-center font-bold">
          Registrate para poder Genera Datos
        </p>

        <FormComponent
          className="flex flex-col flex-wrap justify-center content-center gap-4 m-5 border rounded p-10"
          handleSubmit={handleSubmit}
        >
          <fieldset className={fieldsetStyle}>
            <LabelForm htmlFor="name" title={"Nombre :"}>
              <InputForm
                onChange={(e) =>
                  setFormData({ ...formdata, nombre: e.target.value })
                }
                id="name"
                type="text"
                placeholder="nombre "
                autoComplete="name"
              />
            </LabelForm>
            <LabelForm htmlFor="apellido" title={"Apellido :"}>
              <InputForm
                onChange={(e) =>
                  setFormData({ ...formdata, apellido: e.target.value })
                }
                id="apellido"
                type="text"
                placeholder="apellido"
              />
            </LabelForm>
          </fieldset>
          <fieldset className={fieldsetStyle}>
            <LabelForm htmlFor="email" title={"E-mail :"}>
              <InputForm
                onChange={(e) =>
                  setFormData({ ...formdata, email: e.target.value })
                }
                id="email"
                type="email"
                placeholder="email@dominio.com"
              />
            </LabelForm>
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
          </fieldset>
          <fieldset className={fieldsetStyle}>
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
            <LabelForm htmlFor="passwordConfirm" title={"Repetir Contraseña :"}>
              <InputForm
                onChange={(e) =>
                  setFormData({ ...formdata, passwordConfirm: e.target.value })
                }
                id="passwordConfirm"
                type="password"
                placeholder="repetir contraseña"
              />
            </LabelForm>
          </fieldset>

          {error && (
            <div className="flex justify-center content-center">
              <span className="w-100 text-center text-red-600 font-bold">
                {error}
              </span>
            </div>
          )}

          {msg && (
            <span className="transition delay-150 w-100 text-center font-bold text-green-600">
              {msg}
            </span>
          )}

          <ButtomForm title={"Registrarse"} loading={loading} />
        </FormComponent>
      </SectionForm>
      <p className="mt-5">
        Si ya tienes una Cuenta,
        <Link href="/login" className="text-red-600 font-bold sectionAnimated">
          {" "}
          Inicia Sesion.
        </Link>
      </p>
    </MainComponent>
  );
}
