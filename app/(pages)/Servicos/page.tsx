"use client";

import * as React from "react";
import Link from "next/link";

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
  const [modalAberto, setModalAberto] = React.useState(false);
  const [produtoDetalhado, setProdutoDetalhado] = React.useState(null);

  const abrirModal = (produto) => {
    setProdutoDetalhado(produto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoDetalhado(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-container") {
      fecharModal();
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        Nossos Serviços
      </h1>

      {/* Serviços de Montagem */}
      <section id="servicos-montagem" className="mb-12">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Serviços de Montagem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicosMontagem.map((servico) => (
            <div
              key={servico.nome}
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <img
                src={servico.imagem}
                alt={servico.nome}
                className="w-full h-48 object-cover rounded-lg mb-4"
                onClick={() => abrirModal(servico)}
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {servico.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {servico.descricao}
              </p>
              <button
                onClick={() => abrirModal(servico)} // Passa o serviço para o modal
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="mb-12">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Consultoria Elétrica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultoria.map((item) => (
            <div
              key={item.nome}
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-48 object-cover rounded-lg mb-4"
                onClick={() => abrirModal(item)}
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {item.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.descricao}
              </p>
              <button
                onClick={() => abrirModal(item)} // Passa o item para o modal
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>
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

      {/* Modal de Detalhes do Produto */}
      {modalAberto && produtoDetalhado && (
        <div
          id="modal-container"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 w-11/12 sm:w-2/3 lg:w-1/2 relative">
            <button
              onClick={fecharModal}
              className="absolute top-2 right-2 text-2xl font-extrabold"
            >
              X
            </button>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {produtoDetalhado.nome}
            </h3>
            <img
              src={produtoDetalhado.imagem}
              alt={produtoDetalhado.nome}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              {produtoDetalhado.descricao}
            </p>
            <div className="mt-4">
              <button
                onClick={fecharModal}
                className="mt-4 px-4 py-2 bg-green-500 text-gray-900 rounded-md shadow-lg transition hover:bg-green-600 hover:shadow-xl"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servicos;
