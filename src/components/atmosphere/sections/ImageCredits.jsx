import React from "react";
import FadeIn from "../FadeIn";

const credits = [
  {
    num: "01",
    title: "O que vemos",
    ref: "VITÓRIA ARCANJO. Fotografia autoral. 2026.",
  },
  {
    num: "02",
    title: "Trânsito e poluição urbana",
    ref: "BOAVENTURAVINICIUS. Trânsito na Avenida Paulista. 2025. Fotografia. Wikimedia Commons. Disponível em: [confirmar link da página original]. Acesso em: 12 nov. 2026.",
  },
  {
    num: "03",
    title: "Poluição dentro de casa",
    ref: "FOGÃO A LENHA. [Fotografia]. Pinterest, [s.d.]. Disponível em: [inserir link individual do Pin]. Acesso em: 12 nov. 2026.",
  },
  {
    num: "04",
    title: "A poluição no cotidiano urbano",
    ref: "ISABELA RABELLO. Fotografia autoral. 2026.",
  },
  {
    num: "05",
    title: "O que acontece quando respiramos?",
    ref: "SANTANA, Matheus. Aerial view of a man in a face mask walking on a pavement. 2022. Fotografia. Pexels.",
    url: "https://www.pexels.com/photo/aerial-view-of-a-man-in-a-face-mask-walking-on-a-pavement-14758244/",
  },
  {
    num: "06",
    title: "Animais também fazem parte desse ambiente",
    ref: "ODINTSOV, Roman. Close-up shot of a parrot perched on a branch. 2022. Fotografia. Pexels. Disponível em: [inserir link original da fotografia]. Acesso em: 12 nov. 2026.",
  },
  {
    num: "07",
    title: "Impactos na saúde cardiovascular",
    ref: "CENTERS FOR DISEASE CONTROL AND PREVENTION (CDC). Blood pressure examination. Fotografia: Amanda Mills, 2011. Public Health Image Library (PHIL), imagem 13552.",
    url: "https://wwwn.cdc.gov/phil/Details.aspx?pid=13552",
  },
  {
    num: "08",
    title: "Quem está mais vulnerável?",
    ref: "MASSCHELEYN, Esther. A black and white photo of a woman. 2024. Fotografia. Unsplash. Disponível em: [inserir link original da fotografia]. Acesso em: 12 nov. 2026.",
  },
  {
    num: "09",
    title: "Desigualdade ambiental e social",
    ref: "MILLER, Johnny. Copacabana/Cantagalo, Rio de Janeiro. Fotografia. Projeto Unequal Scenes. Disponível em: [inserir link original da fotografia]. Acesso em: 12 nov. 2026.",
  },
  {
    num: "10",
    title: "Cuidar do ambiente é cuidar da saúde",
    ref: "FROSTEE LENS UG. Hand planting a tree seedling in Uganda. 2026. Fotografia. Pexels.",
    url: "https://www.pexels.com/photo/hand-planting-a-tree-seedling-in-uganda-35744764/",
  },
];

// Créditos das fotografias, um por fato.
export default function ImageCredits() {
  return (
    <FadeIn className="mt-20">
      <h3 className="font-heading text-2xl md:text-3xl">Referências das imagens</h3>
      <p className="mt-3 font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Créditos das fotografias por seção
      </p>

      <ol className="mt-8 divide-y divide-foreground/15 border-y border-foreground/15">
        {credits.map((c) => (
          <li key={c.num} className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-6">
            <span className="font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:w-28 shrink-0">
              FATO {c.num}
            </span>
            <div className="flex-1">
              <p className="font-mono-data text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                {c.title}
              </p>
              <p className="mt-1 font-mono-data text-[13px] leading-relaxed text-foreground/70">
                {c.ref}
                {c.url && (
                  <>
                    {" Disponível em: "}
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline decoration-foreground/30 underline-offset-2 hover:text-foreground"
                    >
                      {c.url}
                    </a>
                    {". Acesso em: 12 nov. 2026."}
                  </>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </FadeIn>
  );
}