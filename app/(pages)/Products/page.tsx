"use client";
import * as React from "react";

const produtosEletronicos = [
  {
    nome: "Resistor 10k Ohm",
    descricao: "Resistor de alta qualidade para circuitos eletrônicos.",
    preco: "R$ 1,99",
    imagem: "https://www.pcbmay.com/wp-content/uploads/2023/12/Figure-1-10K-resistor.jpg",
    link: "#detalhes-produto-1",
  },
  {
    nome: "Capacitor 100µF",
    descricao: "Capacitor de alumínio para estabilização de tensão.",
    preco: "R$ 3,50",
    imagem: "https://www.alligator-electricals.co.ke/wp-content/uploads/2017/12/IMG-20171207-WA0016.jpg",
    link: "#detalhes-produto-2",
  },
  {
    nome: "Transistor NPN",
    descricao: "Transistor para amplificação de sinais elétricos.",
    preco: "R$ 2,30",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUVslFtUnmA5-rrcOFfpQtwaPE-iK2CXZLQ&s",
    link: "#detalhes-produto-3",
  },
];

const servicosMontagem = [
  {
    nome: "Montagem de Painel Elétrico",
    descricao: "Montagem de painel elétrico com componentes de alta qualidade.",
    preco: "R$ 150,00",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-servico-1",
  },
  {
    nome: "Instalação de Fios e Cabos",
    descricao:
      "Instalação de fios e cabos para circuitos elétricos residenciais e comerciais.",
    preco: "R$ 50,00",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-servico-2",
  },
];

const consultoria = [
  {
    nome: "Consultoria em Projetos Elétricos",
    descricao:
      "Consultoria especializada para desenvolver seu projeto elétrico.",
    preco: "R$ 200,00",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-consultoria-1",
  },
  {
    nome: "Análise de Consumo Energético",
    descricao:
      "Análise detalhada do consumo energético para otimizar sua instalação.",
    preco: "R$ 250,00",
    imagem: "https://via.placeholder.com/150",
    link: "#detalhes-consultoria-2",
  },
];

const Products = () => {
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
      {/* Cabeçalho da Página */}
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        Nossa Loja de Eletroferragens
      </h1>

      {/* Produtos Eletrônicos */}
      <section id="produtos-eletronicos" className="mb-12">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Produtos Eletrônicos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosEletronicos.map((produto) => (
            <div
              key={produto.nome}
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => abrirModal(produto)} // Clica na imagem para abrir o modal
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {produto.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {produto.descricao}
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-300">{produto.preco}</p>
              <button
                onClick={() => abrirModal(produto)} // Botão para abrir o modal
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços de Montagem */}
      <section id="produtos-montagem" className="mb-12">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Serviços de Montagem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicosMontagem.map((servico) => (
            <div
              key={servico.nome}
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                src={servico.imagem}
                alt={servico.nome}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => abrirModal(servico)} // Clica na imagem para abrir o modal
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {servico.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {servico.descricao}
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-300">{servico.preco}</p>
              <button
                onClick={() => abrirModal(servico)} // Botão para abrir o modal
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
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => abrirModal(item)} // Clica na imagem para abrir o modal
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {item.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {item.descricao}
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-300">{item.preco}</p>
              <button
                onClick={() => abrirModal(item)} // Botão para abrir o modal
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Detalhes do Produto */}
      {modalAberto && produtoDetalhado && (
        <div
          id="modal-container"
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 w-11/12 sm:w-2/3 lg:w-1/2">
            <button
              onClick={fecharModal}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
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
            <p className="font-semibold text-gray-800 dark:text-gray-300">{produtoDetalhado.preco}</p>
            <div className="mt-4">
              <button 
                onClick={fecharModal}
                className="mt-4 px-4 py-2 bg-green-500 text-gray-900 rounded-md shadow-lg transition hover:bg-green-600 hover:shadow-xl">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
