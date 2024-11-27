import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Título Principal */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Entre em Contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Formulário de Contacto */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>

              {/* Campos Email e Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Seu email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Seu telefone"
                    required
                  />
                </div>
              </div>

              {/* Campo Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escreva sua mensagem"
                  required
                ></textarea>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Localização */}
          <section id="localizacao" className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-3xl font-bold text-center mb-8">
                Localização
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mapa */}
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098585!2d-122.41941558468157!3d37.77492927975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c59e0c6c1%3A0x8c631eb51d2ad45f!2sMaputo%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-BR!2sus!4v1692560213028!5m2!1spt-BR!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>

                {/* Informações de Contato */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                    Nossos Detalhes
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7c0 3.866-3.582 7-8 7S0 10.866 0 7s3.582-7 8-7 8 3.134 8 7z"
                          />
                        </svg>
                      </span>
                      <p className="ml-4 text-gray-600">
                        Rua Exemplo, 123, Maputo, Moçambique
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h11m4 0h-3v10h3M5 21h4M5 9h4M21 3h-8m-2 0H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
                          />
                        </svg>
                      </span>
                      <a
                        href="tel:+258123456789"
                        className="ml-4 text-blue-600 hover:underline"
                      >
                        +258 123 456 789
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12H3m9 0H3m9 0h6"
                          />
                        </svg>
                      </span>
                      <a
                        href="mailto:info@exemplo.com"
                        className="ml-4 text-blue-600 hover:underline"
                      >
                        info@exemplo.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
