import React, { useState } from "react";
import FadeIn from "./FadeIn";

const steps = [
  { label: "AMBIENTE", phrase: "As fontes de emissão fazem parte do ambiente que compartilhamos." },
  { label: "AR", phrase: "Os poluentes se dispersam no ar e podem permanecer em suspensão." },
  { label: "EXPOSIÇÃO", phrase: "Respirar é o contato mais direto entre o ar e o organismo." },
  { label: "ORGANISMO", phrase: "As partículas mais finas alcançam regiões profundas dos pulmões." },
];

// Sequência conceitual ambiente → organismo. Toque em cada etapa para revelar a frase.
export default function FlowSequence() {
  const [open, setOpen] = useState(0);

  return (
    <FadeIn>
      <ol className="flex max-w-md flex-col gap-8 border-l border-foreground/15 pl-8">
        {steps.map((s, i) => {
          const active = open === i;
          return (
            <li key={s.label} className="relative">
              <span
                className={`absolute -left-[2.1rem] top-1.5 h-2.5 w-2.5 rounded-full border border-[hsl(0_100%_27%)] transition-colors ${
                  active ? "bg-[hsl(0_100%_27%)]" : "bg-background"
                }`}
              />
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                aria-expanded={active}
                className="group block text-left"
              >
                <span className="font-mono-data text-[11px] tracking-[0.3em] text-muted-foreground">
                  0{i + 1}
                </span>
                <p
                  className={`font-heading text-3xl md:text-4xl leading-tight transition-opacity ${
                    active ? "" : "opacity-45 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </p>
              </button>
              <p
                className={`text-sm leading-relaxed text-foreground/70 transition-all duration-300 ${
                  active ? "mt-3 max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {s.phrase}
              </p>
            </li>
          );
        })}
      </ol>
    </FadeIn>
  );
}