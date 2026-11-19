import React from "react";
import FadeIn from "../FadeIn";
import SectionMarker from "../SectionMarker";
import ImageCredits from "./ImageCredits";

const accessed = "Acesso em: 12 nov. 2026.";

// Referências em ABNT (NBR 6023), em ordem alfabética.
const refs = [
  {
    pre: "BROWN, J. R. G. et al. Impact of neighbourhood and environmental factors on the risk of incident cardiovascular disease: a systematic review and meta-analysis. ",
    strong: "European Journal of Preventive Cardiology",
    post: ", [S. l.], v. 32, n. 18, 2025. DOI: 10.1093/eurjpc/zwaf165.",
    link: "https://doi.org/10.1093/eurjpc/zwaf165",
  },
  {
    pre: "CHI, G. C. et al. Individual and neighborhood socioeconomic status and the association between air pollution and cardiovascular disease. ",
    strong: "Environmental Health Perspectives",
    post: ", [S. l.], v. 124, n. 12, p. 1840-1847, 2016. DOI: 10.1289/EHP199.",
    link: "https://doi.org/10.1289/EHP199",
  },
  {
    pre: "BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Vigilância em Saúde Ambiental e Qualidade do Ar (VIGIAR). Brasília, DF, [s. d.].",
    link: "https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigiar",
  },
  {
    pre: "FAVARATO, D. A poluição por partículas finas é um fator de risco importante para doenças cardiovasculares. ",
    strong: "Arquivos Brasileiros de Cardiologia",
    post: ", [S. l.], v. 123, n. 1, e20260006, 2026. DOI: 10.36660/abc.20260006.",
    link: "https://doi.org/10.36660/abc.20260006",
  },
  {
    pre: "MOURA, P. H.; CARVALHO, L. D. G.; GODOY, P. H. Impacto da poluição do ar por MP2,5 na mortalidade por doenças do sistema circulatório nos bairros da cidade do Rio de Janeiro (2000-2019). ",
    strong: "Arquivos Brasileiros de Cardiologia",
    post: ", [S. l.], v. 123, n. 1, e20250459, 2026. DOI: 10.36660/abc.20250459.",
    link: "https://doi.org/10.36660/abc.20250459",
  },
  {
    pre: "ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE (OPAS). Nove em cada dez pessoas em todo o mundo respiram ar poluído. Washington, DC, 2018.",
    link: "https://www.paho.org/pt/noticias/1-5-2018-nove-em-cada-dez-pessoas-em-todo-mundo-respiram-ar-poluido",
  },
  {
    pre: "PROGRAMA DAS NAÇÕES UNIDAS PARA O MEIO AMBIENTE (PNUMA). Actions on air quality: a global summary of policies and programmes to reduce air pollution. Nairobi, 2021.",
    link: "https://www.unep.org/resources/report/actions-air-quality-global-summary-policies-programmes-reduce-air-pollution",
  },
  {
    pre: "UNITED STATES ENVIRONMENTAL PROTECTION AGENCY (EPA). Health and environmental effects of particulate matter (PM). Washington, DC, 2026.",
    link: "https://www.epa.gov/pm-pollution/health-and-environmental-effects-particulate-matter-pm",
  },
  {
    pre: "WORLD HEALTH ORGANIZATION (WHO). 9 out of 10 people worldwide breathe polluted air, but more countries are taking action. Geneva, 2 maio 2018.",
    link: "https://www.who.int/news/item/02-05-2018-9-out-of-10-people-worldwide-breathe-polluted-air-but-more-countries-are-taking-action",
  },
  {
    pre: "WORLD HEALTH ORGANIZATION (WHO). Ambient (outdoor) air pollution. Geneva, 24 out. 2024.",
    link: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
  },
  {
    pre: "WORLD HEALTH ORGANIZATION (WHO). Cardiovascular diseases (CVDs). Geneva, 31 jul. 2025.",
    link: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)",
  },
  {
    pre: "WORLD HEALTH ORGANIZATION (WHO). WHO global air quality guidelines: particulate matter (PM2,5 and PM10), ozone, nitrogen dioxide, sulfur dioxide and carbon monoxide. Geneva, 2021.",
    link: "https://www.who.int/publications/i/item/9789240034228",
  },
];

export default function References() {
  return (
    <section id="referencias" className="relative mx-auto max-w-[1100px] px-6 py-[20vh] md:px-10">
      <FadeIn>
        <SectionMarker id="11" label="REFERÊNCIAS CIENTÍFICAS" />
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Referências científicas.
        </h2>
        <p className="mt-4 font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Norma ABNT NBR 6023
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16">
        <ol className="divide-y divide-foreground/15 border-y border-foreground/15">
          {refs.map((r, i) => (
            <li key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:w-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <cite className="block font-mono-data text-[13px] not-italic leading-relaxed text-foreground/70">
                  {r.pre}
                  {r.strong && (
                    <strong className="font-medium text-foreground/90">{r.strong}</strong>
                  )}
                  {r.post}
                </cite>
                {r.link && (
                  <p className="mt-1 font-mono-data text-[12px] leading-relaxed text-foreground/50">
                    Disponível em:{" "}
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline decoration-foreground/25 underline-offset-2 hover:text-foreground"
                    >
                      {r.link}
                    </a>
                    {". "}
                    {accessed}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </FadeIn>

      <ImageCredits />

      <FadeIn delay={0.3} className="mt-24 border-t border-foreground/15 pt-10">
        <p className="font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Universidade Anhembi Morumbi · Curso de Fisioterapia
        </p>
        <p className="mt-2 font-mono-data text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Disciplina: Saúde Única · 2026
        </p>
        <p className="mt-6 font-heading text-2xl italic text-foreground/60">
          Poluição Atmosférica &amp; Saúde Cardiovascular
        </p>
      </FadeIn>
    </section>
  );
}