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

      {/* Grid responsivo: 1 col en mobile, 3 en desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 p-5">
        {/* Card 3: Cancha, ocupa todo el ancho en desktop */}
        <div className="md:col-span-2 row-span-2 ">
          {/* Ajustá alto a gusto */}
          <div className="w-full ">
            <CanchaZonas className="w-[100%] rounded h-full" />
          </div>
        </div>
        {/* Card 1: BarChart, que en desktop ocupa 1 col y 2 filas */}
        <div className="lg:row-span-1 rounded-2xl border  p-4 h-full">
          <div className="h-full">
            <BarChart />
          </div>
        </div>

        {/* Card 2: LineChart, ocupa 2 columnas en desktop */}
        <div className="lg:col-span-1 rounded-2xl border  p-4 h-full">
          <div className="h-full">
            <LineChart />
          </div>
        </div>
      </div>
    </MainComponent>
  );
}
