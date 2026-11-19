import React from "react";

export default function SectionMarker({ id, label, dark = false }) {
  return (
    <div className={`font-mono-data flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] ${dark ? "text-background/50" : "text-muted-foreground"}`}>
      <span className={`inline-block h-px w-8 ${dark ? "bg-background/40" : "bg-foreground/30"}`} />
      <span>SECTION_{id}</span>
      {label && <span className={dark ? "text-background/40" : "text-foreground/40"}>// {label}</span>}
    </div>
  );
}