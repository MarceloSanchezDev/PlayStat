"use client";
import Image from "next/image";
import Link from "next/link";
import BarChart from "./components/BarChart";
import { useState } from "react";

export default function Home() {
  const [log, setLog] = useState(false);
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section
        id="presentacion"
        className="flex flex-col items-center px-6 text-center pt-16 pb-12 sectionAnimated"
      >
        <Image
          src="/Icono.png"
          alt="Logo PlayStat"
          width={180}
          height={180}
          className="mb-6 drop-shadow-lg rounded"
        />

        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-4 text-shadow-lg/20">
          Guarda tus <span className="text-sky-600">estadísticas</span> de
          lanzamientos de campo con{" "}
          <span className="text-orange-500">PlayStat</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed mb-6">
          Visualizá tus porcentajes de tiro, seguí tu progreso y analizá tus
          números de baloncesto enfocados en los tiros de campo.
        </p>

        <div className="flex gap-4 mb-2">
          <button className="px-5 py-2 rounded-md font-medium shadow bg-sky-600 text-white hover:bg-sky-700 transition">
            <Link href="/login">
              Inicia sesión{" "}
              <span className="absolute inline-flex w-3 h-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </Link>
          </button>
          <button className="px-5 py-2 rounded-md font-medium shadow bg-orange-500 text-white hover:bg-orange-600 transition">
            <Link href="/register">Regístrate</Link>
          </button>
        </div>

        <p className="text-gray-600">
          Currently <strong>v1.0.0</strong> <span className="px-1">·</span>
          <a
            href="/"
            className="underline decoration-sky-600 underline-offset-4 hover:text-sky-700"
          >
            GitHub Repository
          </a>
        </p>
      </section>
      <hr className="border-t border-gray-200" />
      <section id="lanzamientos" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Tipos de lanzamientos que puedes registrar
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Tiro de 2 pts",
              desc: "Bandeja, media distancia. Registra intentos y aciertos.",
            },
            {
              title: "Triple (3 pts)",
              desc: "Desde el perímetro. Mide tu volumen y eficiencia de 3.",
            },
            {
              title: "Tiro Libre (1 pts)",
              desc: "Tiros desde la linea. Mide tu eficiencia en tiros desde la linea de Libres",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition border border-gray-100"
            >
              <div className="mb-3 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                {/* Ícono simple */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-crosshair text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-200" />
      <section id="estadisticas" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Métricas y analíticas
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Precisión & Volumen</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>FG% (Field Goal %), 2P%, 3P%</li>
              <li>Intentos y aciertos por zona</li>
              <li>Rachas de acierto (streaks)</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Eficiencia avanzada</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>eFG% (efectiva) y TS% (true shooting)</li>
              <li>Shot Chart por cuadrantes</li>
              <li>Comparativas por sesión/semana</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Visualizaciones</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Gráficas de barras y líneas</li>
              <li>Mapa de calor de lanzamientos</li>
              <li>Exportación de reportes</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-2 border-dashed border-gray-200 bg-white/50 aspect-video flex items-center justify-center p-4">
          <BarChart />
        </div>
        {/*
        
        <div className="max-w-6xl mx-auto p-6">
          <CourtInteractive
            className="w-full h-auto"
            onChange={(zona) => console.log("Zona seleccionada:", zona)}
          />
        </div>
        */}
      </section>

      <hr className="border-t border-gray-200" />

      {/* 4) Comunidad & Desafíos (la sección extra) */}
      <section id="comunidad" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Comunidad & Desafíos
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Perfiles y feed</h3>
            <p className="text-gray-600">
              Crea tu perfil, comparte sesiones, seguí a otros jugadores y
              comentá sus progresos.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Retos y rankings</h3>
            <p className="text-gray-600">
              Participá en desafíos semanales (porcentaje, racha, volumen) y
              subí en el ranking local.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 transition">
            <Link href="/register">
              Crear cuenta gratis{" "}
              <span className="absolute inline-flex w-3 h-5 animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </Link>
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold bg-white border border-gray-300 hover:bg-gray-100 transition">
            Explorar la comunidad
          </button>
        </div>
      </section>
    </main>
  );
}
