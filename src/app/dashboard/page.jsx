"use client";
import BarChart from "../components/BarChart";
import CanchaZonas from "../components/Basqeut";
import LineChart from "../components/LineChart";
import MainComponent from "../components/mainComponent";

export default function DashboardPage() {
  return (
    <MainComponent>
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight my-4">
        Dashboard
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed mb-6">
        Bienvenido, estás autenticado.
      </p>
      <section className="dashboard">
        <article className="componente cancha">
          <CanchaZonas />
        </article>
        <article className="componente barchar">
          <BarChart />
        </article>
        <article className="componente linechart">
          <LineChart />
        </article>
        <article className="componente linechart2">
          <LineChart />
        </article>
      </section>
    </MainComponent>
  );
}
