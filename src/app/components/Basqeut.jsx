"use client";

export default function CanchaZonas({ className = "" }) {
  return (
    <div className={className}>
      <div className="canchaInvisible flex flex-wrap gap-3 rounded-2xl border">
        <div className="w-full h-1/4 basis-1/1 flex flex-nowrap justify-between gap-2">
          {/* fila 1 */}
          <div className="zone eit3 basis-32">esq izq 3</div>
          <div className="zone eit2 basis-82">esq izq 2</div>
          <div className="zone p basis-70">pint (inf)</div>
          <div className="zone edt2 basis-82">esq der 2</div>
          <div className="zone edt3 basis-32">esq der 3</div>
        </div>
        <div className="w-full h-1/3 basis-1/1  flex flex-nowrap justify-between  gap-2 ">
          {/* fila 2 */}
          <div className="zone eit2 basis-32">35° izq 3</div>{" "}
          {/* continúa rectángulo de eit2 */}
          <div className="zone p45i2 basis-82">35° izq 2</div>
          <div className="zone p basis-70">pint (sup)</div>{" "}
          {/* continúa rectángulo de p */}
          <div className="zone p45d2 basis-82">35° der 2</div>
          <div className="zone edt3 basis-32">35° der 3</div>
          {/* continúa rectángulo de edt3 */}
        </div>
        <div className="w-full h-1/4  basis-1/1 flex flex-nowrap justify-between   gap-2">
          <div className="zone p45i3 basis-52">45° izq 3</div>
          <div className="zone mt2L basis-52">45° 2 (izq)</div>
          <div className="zone l basis-70 flex flex-col gap-2">
            <div className="zone border w-full h-full flex justify-center items-center">
              Libre
            </div>
            <div className="zone border w-full h-full flex justify-center items-center">
              med 2
            </div>
          </div>
          <div className="zone mt2R basis-52">45° 2(der)</div>
          <div className="zone p45d3 basis-52">45° der 3</div>
        </div>
        <div className="w-full h-1/4 basis-1/1  flex flex-nowrap justify-between  gap-2">
          <div className="zone p45i3 basis-120">45° izq 3 largo</div>
          <div className="zone p basis-70">med 3</div>
          <div className="zone p45d3 basis-120">45° der 3 largo</div>
        </div>
      </div>
    </div>
  );
}
