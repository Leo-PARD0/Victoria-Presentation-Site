import React from "react";
import { Image } from "@/components/ui/image";

// Espaço reservado para fotografia autoral.
// Com src definido, exibe a fotografia autoral; sem src, mostra o placeholder.
export default function PhotoSlot({ id, ratio = "aspect-[4/3]", caption, src, alt = "" }) {
  return (
    <figure className={`relative w-full ${ratio} overflow-hidden ${src ? "bg-secondary" : "bg-secondary/60 border border-dashed border-foreground/25"}`}>
      {src ? (
        <Image src={src} alt={alt} fittingType="fill" className="absolute inset-0 h-full w-full" />
      ) : (
        <>
          <div className="absolute inset-0 grain opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              [PROPRIETARY_IMAGE_SLOT]
            </span>
            <span className="font-mono-data text-[11px] tracking-[0.2em] text-foreground/55">
              {id}
            </span>
            <span className="font-mono-data text-[9px] uppercase tracking-[0.25em] text-foreground/35">
              fotografia autoral — a inserir
            </span>
          </div>
        </>
      )}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-3 py-2 font-mono-data text-[10px] tracking-wider text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}