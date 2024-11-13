"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link"; 

const highlights = [
  {
    title: "Descontos em Materiais Eletrônicos",
    description:
      "Aproveite até 20% de desconto em componentes eletrônicos selecionados!",
    target: "/Products", 
  },
  {
    title: "Serviço de Montagem de Painéis",
    description:
      "Contrate nosso serviço de montagem e ganhe um desconto exclusivo em sua próxima compra de materiais.",
    target: "/Products", 
  },
  {
    title: "Consultoria Gratuita",
    description:
      "Faça uma consulta gratuita sobre seus projetos elétricos e receba orientação de nossos especialistas.",
    target: "/Products", 
  },
];

export function CarouselSpacing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="mb-16 dark:bg-gray-900 border-2 p-4 rounded-lg shadow-xl">
      {/* Seção Destaques */}
      <h2 className="text-xl font-semibold text-blue-600 mb-6 text-center">
        Destaques
      </h2>

      {/* Carrossel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition- duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="min-w-full p-6 bg-gray-50 rounded-2xl dark:bg-gray-800 flex flex-col justify-between"
              >
                <h3 className="text-lg text-center sm:text-start font-semibold text-blue-600 mb-2">{highlight.title}</h3>
                <p className="text-base text-center sm:text-start text-gray-600 dark:text-gray-300 mb-2 sm:mb-4">
                  {highlight.description}
                </p>
                <Link href={highlight.target}> {/* Usando Link em vez de <a> */}
                  <a className="mb-5 underline text-blue-500 hover:text-blue-700 font-semibold">
                    Saiba mais
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de Navegação (Bolinhas) */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-400 hover:bg-blue-500"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
