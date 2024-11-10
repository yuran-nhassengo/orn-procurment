import React, { useState } from "react";

// Componente Carousel
export const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-300">{children}</div>
    </div>
  );
};

// Componente CarouselItem
export const CarouselItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 w-full">{children}</div>
);

// Componente CarouselContent
export const CarouselContent = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex">{children}</div>;

// Componente CarouselPrevious (Botão de navegação para trás)
export const CarouselPrevious = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full"
  >
    &lt;
  </button>
);

// Componente CarouselNext (Botão de navegação para frente)
export const CarouselNext = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full"
  >
    &gt;
  </button>
);
