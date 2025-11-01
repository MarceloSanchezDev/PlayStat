"use client";

import { useState } from "react";

export default function CanchaZonas() {
  const [zone, setZone] = useState();
  console.log(zone);
  return (
    <div className="canchaInvisible rounded-2xl border">
      <div className="flex flex-wrap gap-4 cancha-divisiones ">
        <div className="w-full basis-1/1 flex flex-nowrap justify-between gap-2">
          {/* fila 1 */}
          <div onClick={()=> setZone("Esqiuna Izquierda , 3 puntos")} className="zone eit3 basis-32">esq izq 3</div>
          <div onClick={()=> setZone("Esquina Izquierda , 2 puntos")} className="zone eit2 basis-82">esq izq 2</div>
          <div onClick={()=> setZone("Pintura Inferior")} className="zone p basis-70">pint (inf)</div>
          <div onClick={()=> setZone("Esquina Derecha , 2 puntos")} className="zone edt2 basis-82">esq der 2</div>
          <div onClick={()=> setZone("Esquiba Derecha , 3 puntos")} className="zone edt3 basis-32">esq der 3</div>
        </div>
        <div className="w-full basis-1/1 flex flex-nowrap justify-between  gap-2 ">
          {/* fila 2 */}
          <div onClick={()=> setZone("35° Iquierda , 3 puntos")} className="zone eit2 basis-32">35° izq 3</div>{" "}
          {/* continúa rectángulo de eit2 */}
          <div onClick={()=> setZone("35° Izquierda , 2 puntos")} className="zone p45i2 basis-82">35° izq 2</div>
          <div onClick={()=> setZone("Pintura Superior")} className="zone p basis-70">pint (sup)</div>{" "}
          {/* continúa rectángulo de p */}
          <div onClick={()=> setZone("35° Derecha , 2 puntos")} className="zone p45d2 basis-82">35° der 2</div>
          <div onClick={()=> setZone("35° Derecha , 3 puntos")} className="zone edt3 basis-32">35° der 3</div>
          {/* continúa rectángulo de edt3 */}
        </div>
        <div className="w-full basis-1/1 flex flex-nowrap justify-between   gap-2">
          <div onClick={()=>{setZone("45° Iquierda , 3 puntos")}} className="zone p45i3 basis-52">45° izq 3</div>
          <div onClick={()=>{setZone("45° Iquierda , 2 puntos")}} className="zone mt2L basis-52">45° 2 (izq)</div>
          <div className="zone l basis-70 flex flex-col gap-2">
            <div onClick={()=>{setZone("Libre")}} className="zone border w-full h-full flex justify-center items-center">
              Libre
            </div>
            <div onClick={()=>{setZone("90° , 2 puntos")}} className="zone border w-full h-full flex justify-center items-center">
              med 2
            </div>
          </div>
          <div onClick={()=>{setZone("45° Derecha , 2 puntos")}} className="zone mt2R basis-52">45° 2(der)</div>
          <div onClick={()=>{setZone("45° Derecha , 3 puntos")}} className="zone p45d3 basis-52">45° der 3</div>
        </div>
        <div className="w-full basis-1/1 flex flex-nowrap justify-between  gap-2">
          <div onClick={()=>{setZone("45° Izquierda")}} className="zone p45i3 basis-120">45° izq 3 largo</div>
          <div onClick={()=>{setZone("90° , 3 puntos")}} className="zone p basis-70">med 3</div>
          <div onClick={()=>{setZone("45° Derecha , 3 puntos")}} className="zone p45d3 basis-120">45° der 3 largo</div>
        </div>
      </div>
    </div>
  );
}
