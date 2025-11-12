"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// 🔧 Registro global de módulos
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ numbers, className }) {
  // ⚙️ Opciones del gráfico
  function options() {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#374151", // texto gris oscuro
            font: { size: 14 },
          },
        },
        title: {
          display: true,
          text: "Porcentaje de aciertos por zona",
          color: "#111827",
          font: {
            size: 18,
            weight: "bold",
          },
          padding: { bottom: 20 },
        },
      },
      scales: {
        x: {
          ticks: { color: "#6b7280" },
          grid: { display: false },
        },
        y: {
          ticks: { color: "#6b7280" },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
      },
    };
  }
  const dataM = numbers?.map((num) => num + 2);

  // 📊 Datos de ejemplo
  function data() {
    return {
      labels: ["Esquina", "45°", "Centro", "Derecha"],
      datasets: [
        {
          label: "Tiros acertados",
          data: numbers,
          backgroundColor: "#0084d1",
          borderColor: "rgba(37, 99, 235, 1)",
          borderWidth: 1,
          borderRadius: 8,
        },
        {
          label: "Tiros fallados",
          data: dataM,
          backgroundColor: "#ff6900",
          borderColor: "rgba(239, 68, 68, 1)",
          borderWidth: 1,
          borderRadius: 8,
        },
      ],
    };
  }

  return (
    <div className={className}>
      <Bar data={data()} options={options()} />
    </div>
  );
}
