import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid  md:grid-rows-4 gap-8">
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Serviços</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Materiais Elétricos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Ferramentas Profissionais</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Consultoria Técnica</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Instalações Elétricas</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Empresa</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Sobre a ORN Electroferragem</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Carreiras</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Certificações</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold text-white mb-4">Informações Legais</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Termos de Serviço</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Cookies</a></li>
          </ul>
        </nav>
        <form className="w-full">
          <h6 className="text-lg font-semibold text-white mb-4">Newsletter</h6>
          <fieldset className="flex flex-col space-y-2">
            <label className="text-sm text-gray-400">Inscreva-se para receber novidades</label>
            <div className="flex">
              <input
                type="email"
                placeholder="seuemail@site.com"
                className="flex-1 p-3 rounded-l-md border-none text-gray-800 focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-orange-500 transition">
                Inscrever-se
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; 2024 ORN Electroferragem. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
