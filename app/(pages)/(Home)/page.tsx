import React from "react";
import { HomeIntr } from "../../../Components/home/index";
import { CarouselSpacing } from "@/Components/home/destaq";

const Home = () => {
  return (
    <div className="pt-10 px-8 w-full text-justify">
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
      <section className="mb-16 dark:bg-gray-900 border-2 p-8 rounded-lg shadow-md text-start md:text-justify">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Serviços</h2>
        <ul className="space-y-4">
          <li>
            <strong>Venda de Materiais Eletrônicos:</strong> Fornecemos uma
            variedade de componentes eletrônicos, desde resistores e capacitores
            até painéis solares e equipamentos de automação.
          </li>
          <li>
            <strong>Montagem de Painéis:</strong> Realizamos a montagem e
            configuração de painéis elétricos sob medida para sua aplicação,
            garantindo eficiência e segurança.
          </li>
          <li>
            <strong>Serviços de Eletricidade:</strong> Oferecemos serviços de
            instalação elétrica, manutenção e reparo, sempre com foco na
            segurança e na qualidade do trabalho.
          </li>
          <li>
            <strong>Procurement:</strong> Atuamos na busca e fornecimento de
            materiais eletrônicos específicos, facilitando a aquisição de
            produtos raros ou de alta demanda.
          </li>
        </ul>
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
