import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      {/* Seção de Contato */}
      <section className="max-w-7xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Fale Conosco</h2>
        <p className="text-lg text-gray-700 mb-8">
          Estamos aqui para ajudar! Entre em contato com nossa equipe para obter mais informações ou tirar suas dúvidas.
        </p>

        {/* Formulário de Contato */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2" htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2" htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                rows="6"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Seção de Informações de Contato */}
      <section className="text-center py-12 bg-blue-50">
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">Ou Entre em Contato Diretamente</h3>
        <p className="text-lg text-gray-700 mb-4">Telefone: <strong>(+258) 123 456 789</strong></p>
        <p className="text-lg text-gray-700 mb-4">E-mail: <strong>contato@ornelectroferragem.com</strong></p>
        <p className="text-lg text-gray-700 mb-4">Endereço: <strong>Avenida Principal, 123, Maputo, Moçambique</strong></p>
        
        {/* Icones de redes sociais */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.facebook.com/OrnElectroferragem" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/company/orn-electroferragem" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a href="https://twitter.com/OrnElectro" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
