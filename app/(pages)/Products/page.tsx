"use client";
import Link from "next/link";
import * as React from "react";

const marcas = [
  {
    nome: "Todas",
    imagem: "https://www.valper.com.br/img/parceiros2.jpg",
  },
  {
    nome: "Marca A",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuRewoTL6pBRR65WtpUvf8nZ256Me2wd5oQ&s",
  },
  {
    nome: "Marca B",
    imagem: "https://via.placeholder.com/200x100?text=Marca+B",
  },
  {
    nome: "Marca C",
    imagem: "https://via.placeholder.com/200x100?text=Marca+C",
  },
];

const produtosEletronicos = [
  {
    nome: "Resistor 10k Ohm",
    descricao: "Resistor de alta qualidade para circuitos eletrônicos.",
    imagem:
      "https://www.pcbmay.com/wp-content/uploads/2023/12/Figure-1-10K-resistor.jpg",
    link: "#detalhes-produto-1",
    marca: "Marca A",
  },
  {
    nome: "Capacitor 100µF",
    descricao: "Capacitor de alumínio para estabilização de tensão.",
    imagem:
      "https://www.alligator-electricals.co.ke/wp-content/uploads/2017/12/IMG-20171207-WA0016.jpg",
    link: "#detalhes-produto-2",
    marca: "Marca B",
  },
  {
    nome: "Transistor NPN",
    descricao: "Transistor para amplificação de sinais elétricos.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUVslFtUnmA5-rrcOFfpQtwaPE-iK2CXZLQ&s",
    link: "#detalhes-produto-3",
    marca: "Marca C",
  },
];

const Products = () => {
  const [marcaSelecionada, setMarcaSelecionada] = React.useState("Todas");
  const [modalAberto, setModalAberto] = React.useState(false);
  const [produtoDetalhado, setProdutoDetalhado] = React.useState(null);

  const produtosFiltrados = produtosEletronicos.filter(
    (produto) =>
      marcaSelecionada === "Todas" || produto.marca === marcaSelecionada
  );

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

  const scrollContainerRef = React.useRef(null);
  const [scrollInterval, setScrollInterval] = React.useState(null);
  const [scrollDirection, setScrollDirection] = React.useState("right");

  const scroll = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 1;

      if (scrollDirection === "right") {
        scrollContainerRef.current.scrollLeft += scrollAmount;

        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth
        ) {
          setScrollDirection("left");
        }
      } else if (scrollDirection === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;

        if (scrollContainerRef.current.scrollLeft <= 0) {
          setScrollDirection("right");
        }
      }
    }
  };

  React.useEffect(() => {
    const interval = setInterval(scroll, 30);
    setScrollInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [scrollDirection]);

  const handleMouseEnter = () => {
    clearInterval(scrollInterval);
  };

  const handleMouseLeave = () => {
    const interval = setInterval(scroll, 30);
    setScrollInterval(interval);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
        Nossa Loja de Eletroferragens
      </h1>

      {/* Filtro por Marcas */}
      <section id="filtro-marcas" className="mb-8">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Filtrar por Marca
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-2 space-x-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {marcas.map((marca) => (
            <div
              key={marca.nome}
              onClick={() => setMarcaSelecionada(marca.nome)}
              className={`cursor-pointer flex flex-col items-center p-4 rounded-lg transition transform hover:scale-105 ${
                marcaSelecionada === marca.nome
                  ? "bg-blue-600 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              style={{ minWidth: "200px", flexShrink: 0 }}
            >
              <img
                src={marca.imagem}
                alt={marca.nome}
                className="w-40 h-20 object-cover rounded-lg mb-2"
              />
              <span className="text-sm sm:text-base text-white">
                {marca.nome}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos Eletrônicos */}
      <section id="produtos-eletronicos" className="mb-12">
        <h2 className="text-2xl font-semibold opacity-80 mb-4">
          Produtos Eletrônicos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.nome}
              className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => abrirModal(produto)}
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {produto.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {produto.descricao}
              </p>
              <button
                onClick={() => abrirModal(produto)}
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
          Veja Nossos Serviços
        </h2>
        <Link
          href="/Servicos" // Usando o caminho correto para a página de serviços
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Conheça Todos os Serviços
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
              className="absolute top-2 right-2  text-2xl font-extrabold"
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

export default Products;
