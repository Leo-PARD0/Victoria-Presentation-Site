import React from "react";
import FadeIn from "./FadeIn";

const chain = ["MEIO AMBIENTE", "SAÚDE HUMANA", "QUALIDADE DE VIDA"];

// Conexão visual da abordagem Saúde Única.
export default function OneHealthChain() {
  return (
    <FadeIn>
      <ul className="flex flex-col items-center gap-6">
        {chain.map((c, i) => (
          <li key={c} className="flex flex-col items-center">
            <span className="font-heading text-2xl md:text-4xl tracking-wide">{c}</span>
            {i < chain.length - 1 && (
              <span aria-hidden className="my-3 text-xl text-[hsl(0_100%_35%)]">↓</span>
            )}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}