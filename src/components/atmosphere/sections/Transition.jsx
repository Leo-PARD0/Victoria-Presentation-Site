import React from "react";
import FadeIn from "../FadeIn";

export default function Transition() {
  return (
    <section id="transicao" className="relative mx-auto max-w-[1000px] px-6 py-[28vh] text-center md:px-10">
      <FadeIn>
        <p className="font-heading text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-balance">
          Mas a poluição atmosférica não é apenas aquilo que conseguimos enxergar.
        </p>
      </FadeIn>
      <FadeIn delay={0.3} className="mt-16">
        <div className="mx-auto h-16 w-px bg-foreground/20" />
        <p className="mt-10 font-mono-data text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          O próximo passo é entender a exposição humana.
        </p>
      </FadeIn>
    </section>
  );
}