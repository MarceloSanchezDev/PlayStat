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

export default function LineChart({ numbers, className }) {
  // 🔹 Opciones de
  //  configuración
  function options() {
    return {
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
  }
  const dataM = numbers?.map((num) => num - 1);
  function data() {
    return {
      labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      datasets: [
        {
          label: "Tiros de 2 puntos",
          data: numbers,
          borderColor: "rgba(37, 99, 235, 1)", // azul
          backgroundColor: "rgba(37, 99, 235, 0.2)",
          tension: 0.4, // suaviza la línea
          fill: true,
        },
        {
          label: "Tiros de 3 puntos",
          data: dataM,
          borderColor: "rgba(249, 115, 22, 1)", // naranja
          backgroundColor: "rgba(249, 115, 22, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    };
  }
  return (
    <div className={className}>
      <Line data={data()} options={options()} />
    </div>
  );
}
