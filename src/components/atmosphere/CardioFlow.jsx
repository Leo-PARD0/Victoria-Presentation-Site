import React, { useState } from "react";
import FadeIn from "./FadeIn";

const steps = [
  { label: "AR", phrase: "O ar entra pelas vias respiratórias." },
  { label: "PULMÕES", phrase: "As partículas finas alcançam regiões profundas dos pulmões." },
  { label: "CIRCULAÇÃO", phrase: "O que acontece nos pulmões pode repercutir no funcionamento dos vasos sanguíneos." },
  { label: "CORAÇÃO", phrase: "Por isso a exposição é estudada como fator de risco cardiovascular." },
];

// Fluxo respiratório → cardiovascular, sobre fundo escuro. Toque em cada etapa para revelar a frase.
export default function CardioFlow() {
  const [open, setOpen] = useState(0);

  return (
    <FadeIn>
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4">
        {steps.map((s, i) => {
          const active = open === i;
          return (
            <React.Fragment key={s.label}>
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                aria-expanded={active}
                className="group flex items-baseline gap-3 text-left"
              >
                <span className="font-mono-data text-[11px] tracking-[0.3em] text-background/40">
                  0{i + 1}
                </span>
                <span
                  className={`font-heading text-3xl md:text-5xl transition-opacity ${
                    s.label === "CORAÇÃO" ? "italic text-[hsl(0_100%_60%)]" : ""
                  } ${active ? "opacity-100" : "opacity-40 group-hover:opacity-100"}`}
                >
                  {s.label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <span aria-hidden className="text-2xl text-background/30">→</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <p className="mt-6 max-w-xl font-mono-data text-[12px] leading-relaxed text-background/60">
        {open >= 0 ? steps[open].phrase : "Toque em uma etapa para ver a frase."}
      </p>
    </FadeIn>
  );
}