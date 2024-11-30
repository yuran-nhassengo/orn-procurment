
import React from "react";

const Modal = ({ isOpen, onClose, servico }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white dark:bg-gray-900 p-6 w-full m-4 rounded-xl max-w-2xl sm:w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4  hover:text-red-600"
        >
          <span className="text-xl font-semibold">X</span>
        </button>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          {servico.nome}
        </h2>
        <img
          src={servico.imagem}
          alt={servico.nome}
          className="w-full sm:h-80 object-cover rounded-lg mb-4"
        />
        <p className=" mb-4">{servico.descricao}</p>

        <ul className="list-disc ml-4 text-sm ">
          {servico.detalhes.map((detalhe, index) => (
            <li key={index}>{detalhe}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
