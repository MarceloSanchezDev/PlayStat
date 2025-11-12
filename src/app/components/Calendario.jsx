"use client";
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePickerSingle() {
  const [date, setDate] = useState();

  return (
    <div className=" m-auto p-4 flex">
      <DayPicker mode="single" selected={date} onSelect={setDate} />
      <p className="mt-2 text-sm text-gray-600">
        {date
          ? `Seleccionaste: ${format(date, "yyyy-MM-dd")}`
          : "Elegí una fecha"}
      </p>
    </div>
  );
}
