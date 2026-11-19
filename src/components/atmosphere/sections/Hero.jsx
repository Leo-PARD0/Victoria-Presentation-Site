import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-foreground">
      {/* Espaço reservado para fotografia autoral de fundo */}
      <div className="absolute inset-0 grain opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono-data text-[10px] uppercase tracking-[0.35em] text-white/40">
          [PROPRIETARY_BACKGROUND_IMAGE_SLOT]
        </span>
        <span className="font-mono-data text-[9px] uppercase tracking-[0.3em] text-white/30 mt-2">
          fotografia autoral — a inserir
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 py-24 md:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading text-white text-[13vw] leading-[0.95] tracking-tight md:text-[8vw] lg:text-[7rem]">
            POLUIÇÃO ATMOSFÉRICA
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="self-end text-right"
        >
          <h1 className="font-heading italic text-white text-[13vw] leading-[0.95] tracking-tight md:text-[8vw] lg:text-[7rem]">
            &amp; Saúde Cardiovascular
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="font-heading text-white/85 text-2xl md:text-3xl italic max-w-2xl text-center text-balance">
            “O que respiramos também pode chegar ao coração.”
          </p>
          <a
            href="#intro"
            className="group inline-flex items-center gap-3 border border-white/50 px-8 py-4 font-mono-data text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(0_100%_60%)]"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white group-hover:bg-foreground animate-pulse" />
            Explorar a história
            <span aria-hidden>↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}