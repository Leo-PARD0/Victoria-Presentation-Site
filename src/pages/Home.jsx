import React, { useEffect, useState } from "react";
import ScrollProgress from "@/components/atmosphere/ScrollProgress";
import SiteNav from "@/components/atmosphere/SiteNav";
import Hero from "@/components/atmosphere/sections/Hero";
import Intro from "@/components/atmosphere/sections/Intro";
import Transition from "@/components/atmosphere/sections/Transition";
import FactSection from "@/components/atmosphere/sections/FactSection";
import FlowSequence from "@/components/atmosphere/FlowSequence";
import CardioFlow from "@/components/atmosphere/CardioFlow";
import OneHealthChain from "@/components/atmosphere/OneHealthChain";
import References from "@/components/atmosphere/sections/References";
import ActionChecklist from "@/components/atmosphere/ActionChecklist";

export default function Home() {
  const [imageLinks, setImageLinks] = useState({});

  useEffect(() => {
    fetch("./image-links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Não foi possível carregar image-links.json (${response.status})`);
        }
        return response.json();
      })
      .then(setImageLinks)
      .catch((error) => console.error("Falha ao carregar as imagens:", error));
  }, []);

  const image = (number) => imageLinks[String(number)] || "/images/atmosphere-placeholder.svg";

  return (
    <main className="relative bg-background">
      <ScrollProgress />
      <SiteNav />
      <Hero />
      <Intro />

      {/* Narrativa principal: 10 fatos, 10 fotografias autorais, em sequência */}
      <FactSection
        num="01"
        title="O que vemos"
        note="A poluição atmosférica está presente no ambiente que compartilhamos e nem sempre é percebida a olho nu."
        factTitle="O ar que respiramos também pode afetar o coração."
        factText="As doenças cardiovasculares são a principal causa de morte no mundo, e a poluição do ar está entre os fatores ambientais associados ao aumento do risco cardiovascular."
        source="Organização Mundial da Saúde (OMS), 2026."
        ratio="aspect-[3/4]"
        src={image(1)}
        alt="Fumaça preta subindo ao horizonte em área verde urbana, com postes de energia em primeiro plano"
      />
      <FactSection
        num="02"
        title="De onde vem a poluição?"
        note="Nas grandes cidades, o fluxo intenso de veículos faz parte da rotina. Carros, ônibus e motocicletas utilizam combustíveis que, durante a queima, liberam poluentes na atmosfera."
        factTitle="Quando a cidade se movimenta, o ar também recebe poluentes."
        factText="A queima de combustíveis pelos veículos é uma importante fonte de poluição atmosférica. Esse processo libera substâncias como material particulado e óxidos de nitrogênio, cuja exposição está associada a prejuízos à saúde cardiovascular."
        source="Organização Mundial da Saúde (OMS)."
        ratio="aspect-[4/3]"
        src={image(2)}
        alt="Ônibus e carros em congestionamento na Avenida Paulista, com postes de sinalização à esquerda, árvores ao lado direito e prédios ao fundo"
      />
      <FactSection
        num="03"
        title="Nem toda poluição vem das fábricas."
        note="A poluição atmosférica também pode estar presente em atividades cotidianas, inclusive dentro das residências."
        factTitle="A fumaça que cozinha também é ar que se respira."
        factText="A queima de lenha para cozinhar libera partículas finas e gases, como o monóxido de carbono. Em ambientes com ventilação inadequada, a fumaça pode aumentar a exposição à poluição do ar doméstico."
        source="Ministério da Saúde — VIGIAR."
        ratio="aspect-[3/4]"
        src={image(3)}
        alt="Fogão a lenha com panela preta sobre o fogo e fumaça saindo sob estrutura de cobertura, em área de mata"
      />
      <FactSection
        num="04"
        title="Onde estamos nesse cenário?"
        note="Cena urbana noturna com ônibus, carros e pedestres em circulação, representando o cotidiano das cidades e a exposição à poluição atmosférica."
        factTitle="A cidade também é um espaço de exposição."
        factText="A poluição atmosférica está presente em ambientes urbanos e pode afetar a população em suas atividades cotidianas. Segundo a Organização Mundial da Saúde, nove em cada dez pessoas no mundo respiram ar com níveis elevados de poluentes. O trânsito é uma das fontes de emissão, mas não a única."
        source="Organização Mundial da Saúde (OMS), 2018."
        ratio="aspect-[3/4]"
        src={image(4)}
        alt="Cruzamento urbano noturno com ônibus azul, carros e pedestres, sob poste de energia e igreja iluminada ao fundo"
      />

      <Transition />

      <FactSection
        num="05"
        title="O que acontece quando respiramos?"
        note="Uma pessoa caminha pela cidade usando máscara: o contato cotidiano com o ar urbano e a exposição aos poluentes atmosféricos."
        factTitle="Partículas muito finas alcançam regiões profundas dos pulmões."
        factText="Ao respirar, também podemos inalar partículas presentes no ar poluído. As partículas mais finas conseguem alcançar regiões profundas dos pulmões, e algumas estão associadas a efeitos que vão além do sistema respiratório, contribuindo para riscos à saúde cardiovascular."
        source="Organização Mundial da Saúde (OMS)."
        ratio="aspect-[3/4]"
        src={image(5)}
        alt="Pessoa de máscara branca, jaqueta jeans e calça azul caminhando sobre calçada de mosaico português, vista de cima em plena luz do dia"
        extra={<FlowSequence />}
      />
      <FactSection
        num="06"
        title="Animais também fazem parte desse ambiente"
        note="Ave em seu ambiente natural, representando a vida animal e sua relação com o meio ambiente."
        factTitle="A saúde dos animais também depende da saúde do ambiente."
        factText="A poluição atmosférica pode prejudicar os animais diretamente, pela inalação de poluentes, e indiretamente, ao contaminar a água, o solo e os alimentos. Essas alterações podem afetar habitats, cadeias alimentares e a biodiversidade. Pela perspectiva da Saúde Única, a saúde humana, animal e ambiental está interligada."
        source="Agência de Proteção Ambiental dos Estados Unidos (EPA); Programa das Nações Unidas para o Meio Ambiente (PNUMA/UNEP); Organização Mundial da Saúde (OMS)."
        ratio="aspect-[3/4]"
        src={image(6)}
        alt="Papagaio-de-papo-vermelho pousado em galho grosso, com plumagem vermelha e asas arroxeadas, sobre fundo verde desfocado da mata"
      />
      <FactSection
        num="07"
        title="Efeitos cardiovasculares"
        note="Pessoa realizando aferição da pressão arterial em atendimento de saúde."
        factTitle="A poluição também pode afetar o coração."
        factText="A exposição à poluição atmosférica, especialmente às partículas finas (PM2,5), está associada ao aumento do risco de doenças cardiovasculares, como infarto e acidente vascular cerebral (AVC). Esses poluentes podem provocar alterações no organismo que afetam o funcionamento do coração e dos vasos sanguíneos."
        source="Organização Mundial da Saúde (OMS); Organização Pan-Americana da Saúde (OPAS); Sociedade Brasileira de Cardiologia (SBC)."
        dark
        ratio="aspect-[3/4]"
        src={image(7)}
        alt="Close de braço com manguito azul de pressão arterial e esfigmomanômetro analógico, segurado por mãos durante aferição"
        extra={<CardioFlow />}
      />
      <FactSection
        num="08"
        title="Quem pode estar mais exposto?"
        note="Retrato em preto e branco de uma pessoa olhando diretamente para a câmera, representando a população inserida em um ambiente sujeito à poluição atmosférica."
        factTitle="Os impactos não são iguais para todos."
        factText="A poluição atmosférica pode afetar pessoas, animais e ecossistemas. Entre os seres humanos, crianças, idosos e pessoas com doenças preexistentes podem apresentar maior vulnerabilidade, enquanto fatores como moradia, trabalho e localização influenciam o nível de exposição. No ambiente, os poluentes também podem atingir a vegetação, os animais, a água e o solo, comprometendo o equilíbrio dos ecossistemas."
        source="Organização Mundial da Saúde (OMS); Agência de Proteção Ambiental dos Estados Unidos (EPA); Ministério da Saúde do Brasil — Programa VigiAR."
        ratio="aspect-[4/5]"
        src={image(8)}
        alt="Retrato em preto e branco de uma jovem olhando para a câmera, com iluminação lateral que destaca o rosto sobre fundo escuro"
      />
      <FactSection
        num="09"
        title="O ambiente também faz parte da saúde"
        note="Vista aérea de duas áreas urbanas com diferentes condições de ocupação e infraestrutura, separadas por uma extensa área de vegetação."
        factTitle="O CEP também pode influenciar a saúde do coração."
        factText="A exposição à poluição atmosférica não é distribuída igualmente entre as populações. Pessoas que vivem em regiões com maior presença de fontes poluidoras podem estar mais expostas a partículas finas, como PM2,5, associadas ao aumento do risco de doenças cardiovasculares. Estudos também apontam relação entre desigualdade socioeconômica, exposição ambiental e maior risco cardiovascular."
        source="Organização Mundial da Saúde (OMS); Arquivos Brasileiros de Cardiologia — estudo sobre MP2,5 e mortalidade cardiovascular no Rio de Janeiro; European Journal of Preventive Cardiology — revisão sistemática sobre fatores ambientais e risco cardiovascular; Environmental Health Perspectives — estudo sobre condição socioeconômica e exposição a PM2,5."
        ratio="aspect-[16/10]"
        src={image(9)}
        alt="Vista aérea vertical de dois bairros separados por uma faixa de mata: à esquerda, prédios altos e ruas arborizadas; à direita, moradias densamente agrupadas"
        extra={<OneHealthChain />}
      />
      <FactSection
        num="10"
        title="O que podemos fazer?"
        note="Mãos plantando uma muda em solo vivo: o cuidado com o ambiente como parte do cuidado com a saúde."
        factTitle="Um ar mais limpo depende de ações integradas."
        factText="A poluição atmosférica é um problema que conecta a saúde humana, animal e ambiental. Por isso, seu enfrentamento também precisa ser integrado. Investir em áreas verdes, priorizar meios de transporte menos poluentes, reduzir as emissões e fortalecer políticas públicas são ações que ajudam a construir cidades mais saudáveis. Cada iniciativa contribui para um ambiente melhor e para a prevenção de doenças, inclusive cardiovasculares."
        highlight="Um ar mais limpo significa mais do que respirar melhor: significa proteger os ecossistemas, promover a saúde e cuidar das próximas gerações. Cuidar do planeta é também cuidar dos corações que vivem nele."
        source="Organização Mundial da Saúde (OMS); Programa das Nações Unidas para o Meio Ambiente (PNUMA); Organização Pan-Americana da Saúde (OPAS)."
        ratio="aspect-[4/3]"
        src={image(10)}
        alt="Close de mãos negras segurando uma muda verde junto ao solo avermelhado, com a terra sendo pressionada ao redor da base"
        extra={<ActionChecklist />}
      />
      <References />
    </main>
  );
}