
"use client"
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Serviços */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Serviços</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Materiais Elétricos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Ferramentas Profissionais</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Consultoria Técnica</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Instalações Elétricas</a></li>
          </ul>
        </nav>

        {/* Empresa */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Empresa</h6>
          <ul className="space-y-2">
            <li><a href="/About" className="text-gray-400 hover:text-white transition">Sobre a ORN Electroferragem</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Carreiras</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Certificações</a></li>
          </ul>
        </nav>

        {/* Informações Legais */}
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Informações Legais</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Termos de Serviço</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Cookies</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <h6 className="text-lg font-semibold text-white mb-4">Newsletter</h6>
          <fieldset className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm text-gray-400">Receba novidades e promoções</label>
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
