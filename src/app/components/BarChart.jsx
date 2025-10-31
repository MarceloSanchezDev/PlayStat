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

// ⚙️ Opciones del gráfico
const options = {
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

// 📊 Datos de ejemplo
const data = {
  labels: ["Izquierda", "Centro", "Derecha"],
  datasets: [
    {
      label: "Tiros acertados",
      data: [8, 12, 6],
      backgroundColor: "#0084d1",
      borderColor: "rgba(37, 99, 235, 1)",
      borderWidth: 1,
      borderRadius: 8,
    },
    {
      label: "Tiros fallados",
      data: [5, 4, 8],
      backgroundColor: "#ff6900",
      borderColor: "rgba(239, 68, 68, 1)",
      borderWidth: 1,
      borderRadius: 8,
    },
  ],
};

export default function BarChart() {
  return (
    <div className="chart-container">
      <Bar data={data} options={options} />;
    </div>
  );
}
