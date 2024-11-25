"use client";

import * as React from "react";
import Link from "next/link";

// Dados dos serviços
const servicosMontagem = [
  {
    nome: "Montagem de Painel Elétrico",
    descricao: "Montagem de painel elétrico com componentes de alta qualidade.",
    imagem:
      "https://netzei-cms-s3.s3.amazonaws.com/914249ebe1b960833d27a23b0423d901140377c1%2F7142%24quadro-min.jpg",
    link: "#detalhes-servico-1",
  },
  {
    nome: "Instalação de Fios e Cabos",
    descricao:
      "Instalação de fios e cabos para circuitos elétricos residenciais e comerciais.",
    imagem:
      "https://www.forestieri.com.br/blog/wp-content/uploads/2022/01/unnamed-21.jpg",
    link: "#detalhes-servico-2",
  },
];

const consultoria = [
  {
    nome: "Consultoria em Projetos Elétricos",
    descricao:
      "Consultoria especializada para desenvolver seu projeto elétrico.",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-consultoria-1",
  },
  {
    nome: "Análise de Consumo Energético",
    descricao:
      "Análise detalhada do consumo energético para otimizar sua instalação.",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-consultoria-2",
  },
];

const Servicos = () => {
  const [imagemAtiva, setImagemAtiva] = React.useState(servicosMontagem[0].imagem);
  const [aberto, setAberto] = React.useState(null); // Para controlar o estado de expansão de cada serviço
  const [indexImagem, setIndexImagem] = React.useState(0); // Para controlar o índice da imagem atual do carrossel

  // Função para trocar as imagens automaticamente
  const trocarImagemAutomaticamente = () => {
    setIndexImagem((prevIndex) => (prevIndex + 1) % servicosMontagem.length);
  };

  // Usando useEffect para criar o intervalo de troca automática de imagens
  React.useEffect(() => {
    const interval = setInterval(trocarImagemAutomaticamente, 5000); // Trocar a imagem a cada 5 segundos
    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  // Atualizar a imagem à esquerda com base no índice do carrossel
  React.useEffect(() => {
    setImagemAtiva(servicosMontagem[indexImagem].imagem);
  }, [indexImagem]);

  const abrirDropdown = (index) => {
    // Alterna o estado de aberto para o serviço clicado
    setAberto(aberto === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        Nossos Serviços
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Imagem à esquerda (carrossel) */}
        <div className="flex-1">
          <img
            src={imagemAtiva}
            alt="Imagem de serviço"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Cards à direita */}
        <div className="flex-1">
          {/* Serviços de Montagem */}
          <section id="servicos-montagem" className="mb-12">
            <h2 className="text-2xl font-semibold opacity-80 mb-4">
              Serviços de Montagem
            </h2>
            <div className="space-y-4">
              {servicosMontagem.map((servico, index) => (
                <div
                  key={servico.nome}
                  className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => abrirDropdown(index)} // Abre/fecha o dropdown ao clicar no card
                >
                  <h3 className="text-lg font-semibold text-blue-600">
                    {servico.nome}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {servico.descricao}
                  </p>

                  {/* Detalhes em dropdown */}
                  {aberto === index && (
                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      <p>Detalhes completos sobre o serviço.</p>
                      <ul className="list-disc ml-4">
                        <li>Detalhe 1 do serviço.</li>
                        <li>Detalhe 2 do serviço.</li>
                        <li>Detalhe 3 do serviço.</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Consultoria */}
          <section id="consultoria" className="mb-12">
            <h2 className="text-2xl font-semibold opacity-80 mb-4">
              Consultoria Elétrica
            </h2>
            <div className="space-y-4">
              {consultoria.map((item, index) => (
                <div
                  key={item.nome}
                  className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => abrirDropdown(index)} // Abre/fecha o dropdown ao clicar no card
                >
                  <h3 className="text-lg font-semibold text-blue-600">
                    {item.nome}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.descricao}
                  </p>

                  {/* Detalhes em dropdown */}
                  {aberto === index && (
                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      <p>Detalhes completos sobre a consultoria.</p>
                      <ul className="list-disc ml-4">
                        <li>Detalhe 1 da consultoria.</li>
                        <li>Detalhe 2 da consultoria.</li>
                        <li>Detalhe 3 da consultoria.</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Link para outros produtos */}
      <section id="servicos-link" className="text-center mb-12">
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
    </div>
  );
};

export default Servicos;
