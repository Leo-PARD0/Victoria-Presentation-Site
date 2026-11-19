import React from "react";

// Fumaça atmosférica discreta: camadas desfocadas que derivam lentamente atrás do texto.
export default function SmokeDrift() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="smoke smoke-a" />
      <div className="smoke smoke-b" />
      <div className="smoke smoke-c" />
    </div>
  );
}