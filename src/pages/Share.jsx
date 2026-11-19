import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SITE_URL = window.location.origin + window.location.pathname;
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=10&data=${encodeURIComponent(SITE_URL)}`;

export default function Share() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono-data text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar ao arquivo
        </Link>

        <p className="mt-12 font-mono-data text-[11px] uppercase tracking-[0.3em] text-[hsl(0_100%_35%)]">
          Acesso
        </p>
        <h1 className="mt-5 font-heading text-4xl leading-[1.05] text-balance md:text-6xl">
          Aponte a câmera do celular para o código.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
          O código abre o Arquivo Atmosférico no navegador do celular. Projete
          esta página durante a apresentação ou imprima o quadro abaixo.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 border border-border bg-card p-8">
          <img
            src={QR_SRC}
            alt="Código QR que abre o site no celular"
            width="280"
            height="280"
            className="h-[280px] w-[280px]"
          />
          <p className="break-all text-center font-mono-data text-[12px] tracking-wide text-muted-foreground">
            {SITE_URL}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-foreground bg-foreground px-6 py-3 font-mono-data text-[11px] uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-80"
          >
            Abrir o site
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center border border-foreground/25 px-6 py-3 font-mono-data text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground"
          >
            Imprimir
          </button>
        </div>
      </div>
    </main>
  );
}