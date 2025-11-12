"use client";

import React, { useState } from "react";
/*
<div className="flex gap-2 w-[100%] p-2">
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-red-500 rotate-45"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>10%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-red-300 rotate-50"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>20%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-red-100"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>30%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-yellow-100"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>40%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-yellow-200"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>50%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-yellow-300"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>60%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-green-200"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>70%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-green-300"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>80%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-green-400"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>90%</p>
      </div>
      <div
        className={
          succes
            ? "border h-[20px] basis-1/10 bg-green-400"
            : "border h-[20px] basis-1/10"
        }
      >
        <p>100%</p>
      </div>
    </div>
*/
const BarraCarga = () => {
  const [succes, setSucces] = useState(true);
  return (
    <div className="flex w-full p-2 items-end relative">
      {[
        {
          color: "bg-red-500",
          y: 100,
          x: 100,
        },
        {
          color: "bg-red-500",
          y: 95,
          x: 90,
        },
        {
          color: "bg-red-400",
          y: 90,
          x: 80,
        },
        {
          color: "bg-red-400",
          y: 85,
          x: 70,
        },
        {
          color: "bg-yellow-400",
          y: 80,
          x: 60,
        },
        {
          color: "bg-yellow-400",
          y: 75,
          x: 50,
        },
        {
          color: "bg-yellow-300",
          y: 70,
          x: 40,
        },
        {
          color: "bg-yellow-300",
          y: 65,
          x: 30,
        },
        {
          color: "bg-yellow-200",
          y: 60,
          x: 20,
        },
        {
          color: "bg-yellow-200",
          y: 55,
          x: 10,
        },
        {
          color: "bg-green-200",
          y: 55,
          x: 1,
        },
        {
          color: "bg-green-200",
          y: 60,
          x: -10,
        },
        {
          color: "bg-green-300",
          y: 65,
          x: -20,
        },
        {
          color: "bg-green-300",
          y: 70,
          x: -30,
        },
        {
          color: "bg-green-400",
          y: 75,
          x: -40,
        },
        {
          color: "bg-green-400",
          y: 80,
          x: -50,
        },
        {
          color: "bg-green-500",
          y: 85,
          x: -60,
        },
        {
          color: "bg-green-500",
          y: 90,
          x: -70,
        },
        {
          color: "bg-green-600",
          y: 95,
          x: -80,
        },
        {
          color: "bg-green-600",
          y: 100,
          x: -90,
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`border w-[40px] h-[20px] ${item.color} relative transition-all duration-300 rounded`}
        >
          <p className="text-[10px] text-center"></p>
        </div>
      ))}
    </div>
  );
};

export default BarraCarga;
