"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Algo falló: {error.message}</p>
      <button onClick={reset}>Reintentar</button>
    </div>
  );
}
