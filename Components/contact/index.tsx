import React from 'react';

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 dark:bg-gray-900 border-2 ">
      <div className="max-w-sm mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-600 text-center mb-4">Entre em Contato</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Preencha o formulário para nos enviar uma mensagem.
        </p>
        
        <form className="space-y-4">
          <div className='mb-3'>
            <input 
              type="text" 
              placeholder="Nome Completo" 
              className="w-full p-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='mb-3'>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='mb-3'>
            <textarea 
              placeholder="Mensagem" 
              className="w-full p-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              rows={3}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-auto block mx-auto bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg hover:bg-orange-500 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
