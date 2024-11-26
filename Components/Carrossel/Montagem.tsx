import React, { useState, useEffect } from "react";

export const CarrosselMontagem = ({ imagens }) => {
  const [indexImagem, setIndexImagem] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(100);

  useEffect(() => {
    const intervalTrocaImagem = setInterval(() => {
      setTempoRestante((prev) => (prev <= 0 ? 100 : prev - 2));
    }, 100);

    const intervalTrocaAutomatica = setInterval(() => {
      setIndexImagem((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000);

    return () => {
      clearInterval(intervalTrocaImagem);
      clearInterval(intervalTrocaAutomatica);
    };
  }, [imagens.length]);

  return (
    <div className="flex-1 relative">
      <div className="relative w-full h-96">
        <img
          src={imagens[indexImagem]}
          alt={`Imagem do serviço de montagem ${indexImagem}`}
          className="w-full h-80 sm:h-full object-cover rounded-lg transition-all duration-1000 hover:h-96  sm:hover:opacity-80 sm:hover:h-full border-2 border-black/20"
        />
        {/* Barra de Progresso */}
        <div
          className="absolute sm:bottom-0 left-0 w-full h-1 bg-blue-500/60  rounded-full transition-all "
          style={{ width: `${tempoRestante}%` }}
        ></div>
      </div>
    </div>
  );
};
