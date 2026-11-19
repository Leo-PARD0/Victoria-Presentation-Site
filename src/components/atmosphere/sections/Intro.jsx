import React from "react";
import FadeIn from "../FadeIn";
import SectionMarker from "../SectionMarker";
import SmokeDrift from "../SmokeDrift";

// Introdução breve e textual — sem espaço de fotografia.
export default function Intro() {
  return (
    <section id="intro" className="relative mx-auto max-w-[1100px] overflow-hidden px-6 py-[18vh] md:px-10">
      <SmokeDrift />
      <FadeIn className="relative z-10">
        <SectionMarker id="00" label="INTRODUÇÃO" />
      </FadeIn>
      <FadeIn delay={0.1} className="relative z-10 mt-12 max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
          O ar está em todos os lugares.
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/70">
          <p>
            Nós respiramos sem pensar. Vivemos em cidades, circulamos por diferentes ambientes e compartilhamos esse espaço com outras pessoas, animais e com o próprio ambiente.
          </p>
          <p>
            Mas aquilo que respiramos nem sempre é tão invisível quanto parece.
          </p>
          <p>
            A poluição atmosférica faz parte de uma realidade que ultrapassa o ambiente em que surge. Ela pode acompanhar nosso cotidiano e alcançar o organismo — levantando uma questão que nem sempre percebemos:
          </p>
          <p className="font-heading italic text-2xl md:text-3xl leading-snug text-foreground">
            o que o ar que respiramos pode fazer com o nosso coração?
          </p>
          <p>
            É a partir dessa pergunta que começamos a observar a relação entre poluição atmosférica e saúde cardiovascular.
          </p>
          <p>
            E, para entender essa relação, precisamos voltar ao começo: ao que conseguimos ver.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}