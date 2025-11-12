import BarChart from "@/app/components/BarChart";
import BarraCarga from "@/app/components/barraCarga/BarraCarga";
import DatePickerSingle from "@/app/components/Calendario";
import MainComponent from "@/app/components/mainComponent";
import { Suspense } from "react";

export default function User() {
  return (
    <MainComponent>
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight my-4">
        User
      </h1>
      <section className="grid  grid-rows-5 grid-cols-3 gap-2 w-full p-4">
        <article className="flex flex-col gap-2 col-span-1 row-span-3 rounded-tl-lg rounded-br-lg h-[100%] shadow-xl">
          <Suspense fallback={<div>Cargando...</div>}>
            <div className="border basis-1/2 text-center rounded-lg flex flex-col justify-center items-center gap-3">
              <img
                src="/icono.png"
                alt="Imagen del User"
                className="w-[250px] rounded-lg"
              />
              <h2 className="text-center text-4xl">Nombre Completo</h2>
            </div>
            <div className="border basis-1/2 rounded-lg flex flex-col gap-3 justify-center items-center">
              <ul className=" h-[100%] flex flex-col gap-3 justify-center items-start">
                <li className="text-2xl">Usuario : Nombre de Usuario</li>
                <li className="text-2xl">Email : User@Dominio.com</li>
                <li className="text-2xl">Ubicacion : Ubicacion del Usuario</li>
                <li className="text-2xl">Equipo : Nombre del equipo</li>
                <li className="text-2xl">Posicion : Posicion del Usuario</li>
              </ul>
            </div>
          </Suspense>
        </article>
        <article className="col-span-1 row-span-3 rounded-tl-lg rounded-br-lg h-[100%] shadow-xl flex flex-col gap-2">
          <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
            <div className="border basis-1/2 rounded-lg flex flex-col justify-center content-center p-4">
              <div>
                Porcentaje de simples
                <BarraCarga />
              </div>
              <div>
                Porcentaje de dobles
                <BarraCarga />
              </div>
              <div>
                Porcentaje de triples
                <BarraCarga />
              </div>
              <div>
                Porcentaje total
                <BarraCarga />
              </div>
            </div>

            <div className="border basis-1/2 rounded-lg flex flex-col justify-center content-center gap-2">
              <h2 className="text-center text-3xl">Tiempo entrenando</h2>

              <p className="text-center text-8xl">13:20:20</p>
            </div>
          </Suspense>
        </article>
        <article className="col-span-1 row-span-3 rounded-tl-lg rounded-br-lg h-[100%] shadow-xl flex flex-col gap-2">
          <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
            <div className="border basis-1/2 rounded-lg p-2">
              <BarChart numbers={[1, 2, 3, 4]}></BarChart>
            </div>

            <div className="border basis-1/2 rounded-lg w-[100%] m-auto">
              <DatePickerSingle></DatePickerSingle>
            </div>
          </Suspense>
        </article>
        <article className="col-span-3 row-span-2 rounded-tl-lg rounded-br-lg h-100 shadow-xl">
          <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
            Estadisticas
          </Suspense>
        </article>
      </section>
    </MainComponent>
  );
}
