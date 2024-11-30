"use client";

import React from "react";
import Link from "next/link";
import { HomeIntr } from "@/components/home";
import { CarouselSpacing } from "@/components/home/destaq";


const Home = () => {
  return (
    <div className="pt-10 px-4 md:px-8 w-full text-justify">
      <h1 className="font-bold text-blue-600 text-3xl text-center mb-12">
        Introdução à Empresa
      </h1>

      {/* Introdução da empresa */}
      <div className="flex justify-center mb-16">
        <HomeIntr />
      </div>

      {/* Destaques */}
      <div>
        <CarouselSpacing />
      </div>

      {/* Serviços */}
      <section className="mb-16 dark:bg-gray-900 border-2 p-2 sm:p-8 rounded-lg shadow-md text-start md:text-justify">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Serviços</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          <Link href="/Products">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src="https://www.valper.com.br/img/parceiros2.jpg"
                alt="Venda de Materiais Eletrônicos"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-blue-600">
                  Venda de Materiais Eletrônicos
                </h3>
                <p className="flex-grow">
                  Fornecemos uma variedade de componentes eletrônicos, desde
                  resistores e capacitores até painéis solares e equipamentos de
                  automação.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Servicos">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src="https://netzei-cms-s3.s3.amazonaws.com/914249ebe1b960833d27a23b0423d901140377c1%2F7142%24quadro-min.jpg"
                alt="Montagem de Painéis"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-blue-600">
                  Montagem de Painéis
                </h3>
                <p className="flex-grow">
                  Realizamos a montagem e configuração de painéis elétricos sob
                  medida para sua aplicação, garantindo eficiência e segurança.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/Servicos">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src="/path/to/electricity-services-image.jpg"
                alt="Serviços de Eletricidade"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-blue-600">
                  Serviços de Eletricidade
                </h3>
                <p className="flex-grow">
                  Oferecemos serviços de instalação elétrica, manutenção e
                  reparo, sempre com foco na segurança e na qualidade do
                  trabalho.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/services/procurement">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src="/path/to/procurement-image.jpg"
                alt="Procurement"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-blue-600">
                  Procurement
                </h3>
                <p className="flex-grow">
                  Atuamos na busca e fornecimento de materiais eletrônicos
                  específicos, facilitando a aquisição de produtos raros ou de
                  alta demanda.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Contactos */}
      <section className="border-2 dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contactos</h2>
        <p className="mb-4">
          Entre em contato conosco para mais informações sobre nossos produtos e
          serviços:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Endereço:</strong> Rua da Eletricidade, 123, Maputo,
            Moçambique
          </li>
          <li>
            <strong>Telefone:</strong> +258 21 123 456
          </li>
          <li>
            <strong>Email:</strong> contato@orneletrferragem.co.mz
          </li>
          <li>
            <strong>Website:</strong> www.orneletrferragem.co.mz
          </li>
          <li>
            <strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 08h
            às 17h
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
