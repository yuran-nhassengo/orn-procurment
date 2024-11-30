"use client";
import React from "react";
import TypingEffect from "./introd"; 

export const HomeIntr = () => {
  const introductionText = `Orn Eletróferragem é uma referência em Moçambique, com mais de 10 anos de experiência no fornecimento de materiais eletrônicos de alta qualidade e serviços especializados. Nossa missão é atender às necessidades dos nossos clientes com excelência, oferecendo soluções inovadoras e personalizadas no setor elétrico. Com uma equipe qualificada e comprometida, garantimos que nossos produtos e serviços atendam aos mais altos padrões de qualidade e confiabilidade.`;

  return (
    <div className="flex rounded-xl border-2 shadow-xl bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 relative overflow-hidden">
      {/* Imagem de fundo com exposição baixa */}
      <div
        className="absolute inset-0 bg-cover fit bg-center opacity-30 filter blur-sm"
        style={{
          backgroundImage:
            'url("https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.jpg")',
        }}
      ></div>

      {/* Seção de texto no lado esquerdo */}
      <div className="flex-1 flex flex-col justify-center md:items-start p-4 md:p-16 space-y-6 relative z-10">
        <h1 className="text-3xl mt-4 font-bold text-green-400 text-center animate-bounce">
          Orn Eletróferragem
        </h1>
        <p className="text-lg text-center sm:text-justify leading-relaxed">
          <TypingEffect text={introductionText} speed={15} />
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-gray-900 rounded-md shadow-lg transition hover:bg-green-600 hover:shadow-xl">
          Saiba mais
        </button>
      </div>
    </div>
  );
};
