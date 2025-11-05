"use client";
import { Suspense, useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import CanchaZonas from "../components/Basqeut";
import LineChart from "../components/LineChart";
import MainComponent from "../components/mainComponent";



export default function DashboardPage() {
  const [numbers, setNumbers] = useState();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello', {
          method: 'GET',
        });
        const data = await response.json();
        setNumbers(data.message);
        console.log('Mensaje de la API:', data.message);
      } catch (error) {
        console.error('Error al llamar a la API:', error);
      }
    };
    
    fetchData();  
  }, [])
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
          <Suspense fallback={<div>Cargando...</div>}>

          <CanchaZonas  />
          </Suspense>
        </article>
        <article className="componente barchar">
          <Suspense fallback={<div className="text-red-600">Cargando...</div>}>

          <BarChart numbers={numbers}/>
          </Suspense>
        </article>
        <article className="componente linechart">
          <Suspense fallback={<div className="text-red-600"> cCargando...</div>}>

          <LineChart numbers={numbers}/>
          </Suspense>
        </article>
        <article className="componente linechart2">
          <Suspense fallback={<div className="text-red-600">Cargando...</div>}>

          <LineChart numbers={numbers}/>
          </Suspense>
        </article>
      </section>
    </MainComponent>
  );
}
