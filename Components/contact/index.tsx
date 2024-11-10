import React from 'react';

const Contact = () => {
  return (
    <section className="bg-blue-600 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato Conosco</h2>
        <p className="mb-8 text-base md:text-lg">
          Estamos aqui para ajudar! Preencha o formulário abaixo para nos enviar uma mensagem.
        </p>
        
        <form className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Nome Completo" 
              className="w-full p-3 rounded-lg text-gray-900"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-lg text-gray-900"
            />
          </div>
          <div>
            <textarea 
              placeholder="Mensagem" 
              className="w-full p-3 rounded-lg text-gray-900" 
              rows={5}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
