"use client";
import BarChart from "../components/BarChart";
import CanchaZonas from "../components/Basqeut";
import LineChart from "../components/LineChart";
import MainComponent from "../components/mainComponent";

export default function DashboardPage() {
  return (
    <MainComponent>
      {/* Grid responsivo: 1 col en mobile, 3 en desktop 
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight my-4">
        Dashboard
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 max-w-xl leading-relaxed mb-6">
        Bienvenido, estás autenticado.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 p-5">
        
        <div className="md:col-span-2 row-span-2 ">
          
          <div className="w-full ">
            
          </div>
        </div>
       
        <div className="lg:row-span-1 rounded-2xl border  p-4 h-full">
          <div className="h-full">
            
          </div>
        </div>

        
        <div className="lg:col-span-1 rounded-2xl border  p-4 h-full">
          <div className="h-full">
            
          </div>
        </div>
      </div>
      */}
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
