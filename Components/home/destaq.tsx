import * as React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const highlights = [
  {
    title: "Descontos em Materiais Eletrônicos",
    description:
      "Aproveite até 20% de desconto em componentes eletrônicos selecionados!",
  },
  {
    title: "Serviço de Montagem de Painéis",
    description:
      "Contrate nosso serviço de montagem e ganhe um desconto exclusivo em sua próxima compra de materiais.",
  },
  {
    title: "Consultoria Gratuita",
    description:
      "Faça uma consulta gratuita sobre seus projetos elétricos e receba orientação de nossos especialistas.",
  },
];

export function CarouselSpacing() {
  return (
    <div className="mb-16 dark:bg-gray-900 border-2 p-2 rounded-lg shadow-xl">
      {/* Seção Destaques */}
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Destaques</h2>
      <div className="flex flex-col items-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent className="-ml-1">
            {highlights.map((highlight, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 md:p-4">
                  <Card className="  flex-col items-center justify-center p-0 md:p-4 shadow-lg rounded-lg">
                    <CardContent className="text-center">
                      <h3 className="text-sm font-normal text-blue-600 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-blue-600" />
          <CarouselNext className="text-blue-600" />
        </Carousel>
      </div>
    </div>
  );
}
