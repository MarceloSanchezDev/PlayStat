"use client";
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
      <p>Contador: {n}</p>
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  );
}
