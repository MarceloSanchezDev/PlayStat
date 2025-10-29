"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// 🔹 Registramos los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 🔹 Opciones de configuración
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // "bottom", "left", "right"
    },
    title: {
      display: true,
      text: "Porcentaje de aciertos por fecha",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        callback: (value) => value + "%",
      },
    },
  },
};

// 🔹 Datos del gráfico
const data = {
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  datasets: [
    {
      label: "Tiros de 2 puntos",
      data: [60, 65, 70, 68, 75, 72, 78],
      borderColor: "rgba(37, 99, 235, 1)", // azul
      backgroundColor: "rgba(37, 99, 235, 0.2)",
      tension: 0.4, // suaviza la línea
      fill: true,
    },
    {
      label: "Tiros de 3 puntos",
      data: [35, 40, 42, 38, 45, 47, 50],
      borderColor: "rgba(249, 115, 22, 1)", // naranja
      backgroundColor: "rgba(249, 115, 22, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
