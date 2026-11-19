import React from "react";
import FadeIn from "../FadeIn";
import SectionMarker from "../SectionMarker";
import PhotoSlot from "../PhotoSlot";

// Uma seção-narrativa = um fato + uma fotografia autoral.
// Exatamente 10 espaços oficiais, FOTO_01 a FOTO_10.
export default function FactSection({
  num,
  title,
  note,
  dark = false,
  ratio = "aspect-[4/3]",
  wide = false,
  extra = null,
  src = null,
  alt = "",
  factTitle = "[Inserir título do fato]",
  factText = "[Inserir fato científico. Espaço reservado para o conteúdo que será desenvolvido pelo grupo.]",
  source = "[inserir referência — formato APA/ABNT]",
  highlight = null,
}) {
  const reverse = Number(num) % 2 === 0;
  return (
    <section
      id={`fato-${num}`}
      className={`relative py-[16vh] md:py-[20vh] ${dark ? "bg-foreground text-background" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <SectionMarker id={num} label={`FATO ${num}`} dark={dark} />
        </FadeIn>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className={`${wide ? "md:col-span-8" : "md:col-span-7"} ${reverse ? "md:order-2" : ""}`}>
            <FadeIn>
              <div className="relative">
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -top-12 -left-3 z-0 select-none font-heading text-[26vw] leading-none md:text-[10rem] ${dark ? "text-background/10" : "text-foreground/5"}`}
                >
                  {num}
                </span>
                <div className="relative z-10">
                  <PhotoSlot id={`FOTO_${num}`} ratio={ratio} src={src} alt={alt} />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className={`${wide ? "md:col-span-4" : "md:col-span-5"} md:pt-10 ${reverse ? "md:order-1" : ""}`}>
            <FadeIn delay={0.15}>
              <p className={`font-mono-data text-[11px] uppercase tracking-[0.3em] ${dark ? "text-[hsl(0_100%_60%)]" : "text-[hsl(0_100%_35%)]"}`}>
                FATO {num}
              </p>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05] text-balance">
                {title}
              </h2>
              <p className={`mt-6 font-mono-data text-[12px] leading-relaxed ${dark ? "text-background/50" : "text-muted-foreground"}`}>
                {note}
              </p>
              <h3 className={`mt-10 font-heading text-2xl leading-snug text-balance ${dark ? "text-background" : "text-foreground"}`}>
                {factTitle}
              </h3>
              <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-background/70" : "text-foreground/70"}`}>
                {factText}
              </p>
              {highlight && (
                <p className={`mt-10 border-l-2 pl-5 font-heading text-xl italic leading-snug md:text-2xl ${dark ? "border-[hsl(0_100%_60%)] text-background/85" : "border-[hsl(0_100%_35%)] text-foreground"}`}>
                  {highlight}
                </p>
              )}
              <cite className={`mt-6 block font-mono-data text-[12px] not-italic tracking-wide ${dark ? "text-background/45" : "text-muted-foreground"}`}>
                Fonte: {source}
              </cite>
            </FadeIn>
          </div>
        </div>

        {extra && <div className="mt-20">{extra}</div>}
      </div>
    </section>
  );
}