"use client";
import React from "react";
import TypingEffect from "./introd";

export const HomeIntr = () => {
  const introductionText = `
    Orn Eletróferragem é uma referência em Moçambique, com mais de 10 anos de 
    experiência no fornecimento de materiais eletrônicos de alta qualidade e serviços especializados. 
    Nossa missão é atender às necessidades dos nossos clientes com excelência,
    oferecendo soluções inovadoras e personalizadas no setor elétrico. Com uma equipe qualificada e comprometida, 
    garantimos que nossos produtos e serviços atendam aos mais altos padrões de qualidade e confiabilidade.
  `;

  return (
    <div className="flex h-screen rounded-xl border-2 shadow-xl dark:bg-gradient-to-r from-gray-900 to-gray-800 dark:text-gray-200">
      {/* Seção de texto no lado esquerdo */}
      <div className="flex-1 flex flex-col justify-center  md:items-start p-8 md:p-16 space-y-6">
        <h1 className="text-4xl font-bold text-green-400 text-center mt-2 animate-bounce">
          Orn Eletróferragem
        </h1>
        <p className="text-lg  leading-relaxed">
          <TypingEffect text={introductionText} />
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-gray-900 rounded-md shadow-lg transition hover:bg-green-600 hover:shadow-xl">
          Saiba mais
        </button>
      </div>

      {/* Imagem fixa no lado direito ocupando 50% da largura 
      <div className="fixed right-0 top-0 h-full w-1/2">
      <img
       src="https://via.placeholder.com/600x300"
       alt="Imagem Orn Eletróferragem"
       className="opacity-80 transition hover:opacity-100"/>
      </div>*/}
    </div>
  );
};
