import MainComponent from "@/app/components/mainComponent";
import { Suspense } from "react";

export default function User() {
  return (
    <MainComponent >
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight my-4">Marelo Sanchez User</h1>
    <section className="dashboard">
            <article className="componente cancha">
              <Suspense fallback={<div>Cargando...</div>}>
      perfil de usuario
              
              </Suspense>
            </article>
            <article className="componente barchar">
              <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
    datos del usuario
              
              </Suspense>
            </article>
            <article className="componente linechart">
              <Suspense fallback={<div className="text-red-600"> cCargando...</div>}>
    comentarios recientes
              
              </Suspense>
            </article>
            <article className="componente linechart2">
              <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
    
              comentarios destacados
              </Suspense>
            </article>
          </section>
    </MainComponent>
  );
}
