import React, { useState } from "react";

const actions = [
  "Usar transporte coletivo, caminhar ou pedalar quando possível.",
  "Evitar a queima de combustíveis dentro de casa e manter os ambientes ventilados.",
  "Plantar e cuidar de árvores, apoiando áreas verdes no bairro.",
  "Não queimar lixo ou vegetação.",
  "Acompanhar e cobrar políticas públicas de qualidade do ar.",
];

export default function ActionChecklist() {
  const [checked, setChecked] = useState(() => new Set());

  const toggleAction = (index) => {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="border-t border-foreground/15 pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-mono-data text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          O que eu posso fazer
        </p>
        <p className="font-mono-data text-[11px] uppercase tracking-[0.3em] text-[hsl(0_100%_35%)]">
          {checked.size} de {actions.length} ações marcadas
        </p>
      </div>

      <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
        {actions.map((action, index) => {
          const isChecked = checked.has(index);
          return (
            <li key={action}>
              <button
                type="button"
                aria-pressed={isChecked}
                onClick={() => toggleAction(index)}
                className="group flex w-full items-start gap-5 py-5 text-left"
              >
                <span
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center border transition-colors ${
                    isChecked
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/25 group-hover:border-foreground/60"
                  }`}
                >
                  {isChecked && "✓"}
                </span>
                <span className="flex-1">
                  <span className="font-mono-data text-[11px] tracking-[0.3em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-1 block text-lg leading-snug transition-colors ${
                      isChecked ? "text-foreground/45 line-through" : "text-foreground/80"
                    }`}
                  >
                    {action}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
