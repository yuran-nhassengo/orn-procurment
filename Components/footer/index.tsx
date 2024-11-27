"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2">
        {/* Logo e Introdução */}
          <div className="flex items-center mb-2">
            <img
              src="data:image/png;base64,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"
              alt="Logo ORN Electroferragem"
              className="h-2"
            />
            <span className="text-white text-lg font-semibold ml-3">
              ORN Electroferragem
            </span>
          </div>
        {/* Serviços */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Serviços</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Materiais Elétricos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Ferramentas Profissionais
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Consultoria Técnica
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Instalações Elétricas
              </a>
            </li>
          </ul>
        </nav>

        {/* Empresa */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Empresa</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/About"
                className="text-gray-400 hover:text-white transition"
              >
                Sobre a ORN Electroferragem
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Carreiras
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Certificações
              </a>
            </li>
          </ul>
        </nav>

        {/* Informações Legais */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">
            Informações Legais
          </h6>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Termos de Serviço
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Política de Cookies
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter */}
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <h6 className="text-lg font-semibold text-white mb-4">Newsletter</h6>
          <fieldset className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm text-gray-400"
            >
              Receba novidades e promoções
            </label>
            <div className="flex">
              <input
                id="email"
                type="email"
                placeholder="seuemail@site.com"
                className="flex-1 p-3 rounded-l-md border-none text-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-orange-500 transition"
              >
                Inscrever-se
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Rodapé Final */}
      <div className="text-center text-gray-500 mt-12 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} ORN Electroferragem. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
