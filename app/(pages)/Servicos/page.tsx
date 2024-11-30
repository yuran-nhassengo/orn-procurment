"use client";

import * as React from "react";
import Link from "next/link";
import { CarrosselConsultoria } from "../../../components/Carrossel";
import { CarrosselMontagem } from "../../../components/Carrossel/Montagem";
import Modal from "../../../components/servicos/modal";

const servicosMontagem = [
  {
    nome: "Montagem de Painel Elétrico",
    descricao: "Montagem de painel elétrico com componentes de alta qualidade.",
    imagem:
      "https://netzei-cms-s3.s3.amazonaws.com/914249ebe1b960833d27a23b0423d901140377c1%2F7142%24quadro-min.jpg",
    detalhes: [
      "Escolha de componentes com alta qualidade.",
      "Montagem em conformidade com as normas técnicas.",
      "Teste e validação de funcionamento após instalação.",
    ],
  },
  {
    nome: "Instalação de Fios e Cabos",
    descricao:
      "Instalação de fios e cabos para circuitos elétricos residenciais e comerciais.",
    imagem:
      "https://www.forestieri.com.br/blog/wp-content/uploads/2022/01/unnamed-21.jpg",
    detalhes: [
      "Instalação de fios com garantia de segurança e eficiência.",
      "Execução conforme normas de segurança elétrica.",
      "Testes pós-instalação para garantir a funcionalidade.",
    ],
  },
];

const consultoria = [
  {
    nome: "Consultoria em Projetos Elétricos",
    descricao:
      "Consultoria especializada para desenvolver seu projeto elétrico.",
    imagem: "https://static.wixstatic.com/media/2e19e7_9d3f1ede47204511afb04f9d2ecd838f~mv2.jpg/v1/fill/w_516,h_326,al_c,lg_1,q_80,enc_auto/1617891166606f0f5e3ac42.jpg",
    detalhes: [
      "Análise detalhada das necessidades do seu projeto.",
      "Desenvolvimento de projetos elétricos personalizados.",
      "Consultoria para otimização de consumo e eficiência energética.",
    ],
  },
  {
    nome: "Análise de Consumo Energético",
    descricao:
      "Análise detalhada do consumo energético para otimizar sua instalação.",
    imagem: "https://hccenergiasolar.com.br/wp-content/uploads/2022/05/hccenergiasolar_consumo-1-.jpeg",
    detalhes: [
      "Levantamento do consumo energético atual.",
      "Identificação de oportunidades para redução de custos.",
      "Recomendações para otimização de energia e eficiência.",
    ],
  },
];

const Servicos = () => {
  const [modalAberto, setModalAberto] = React.useState(false);
  const [detalhesModal, setDetalhesModal] = React.useState(null);
  const abrirModal = (servico) => {
    setDetalhesModal(servico);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setDetalhesModal(null);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        Nossos Serviços
      </h1>

      {/* Seção de Serviços de Montagem */}
      <div className="flex flex-col lg:flex-row sm:gap-12 mb-12">
        <div className="flex-1">
          <CarrosselMontagem
            imagens={servicosMontagem.map((servico) => servico.imagem)}
          />
        </div>

        {/* Conteúdo de Serviços de Montagem à Direita */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold opacity-80 mb-4">
            Serviços de Montagem
          </h2>

          <div className="space-y-4">
            {servicosMontagem.map((servico) => (
              <div
                key={servico.nome}
                className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => abrirModal(servico)} 
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {servico.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {servico.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Consultoria Elétrica */}
      <div className="flex flex-col lg:flex-row sm:gap-12 mb-12">
        <div className="flex-1">
          <CarrosselConsultoria
            imagens={consultoria.map((item) => item.imagem)}
          />
        </div>

        {/* Conteúdo de Consultoria à Direita */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold opacity-80 mb-4">
            Consultoria Elétrica
          </h2>

          <div className="space-y-4">
            {consultoria.map((item) => (
              <div
                key={item.nome}
                className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => abrirModal(item)}
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {item.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="servicos-link" className="text-center mb-8">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Veja Nossos Produtos
        </h2>
        <Link
          href="/Products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Conheça Todos os Produtos
        </Link>
      </section>

      <Modal
        isOpen={modalAberto}
        onClose={fecharModal}
        servico={detalhesModal}
      />
    </div>
  );
};

export default Servicos;
