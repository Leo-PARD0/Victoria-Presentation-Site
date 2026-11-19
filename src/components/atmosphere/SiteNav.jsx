import React from "react";

export default function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <span className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-white">
          Saúde Única · Anhembi Morumbi
        </span>
        <span className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-white hidden sm:block">
          Fisioterapia · 2026
        </span>
      </div>
    </header>
  );
}