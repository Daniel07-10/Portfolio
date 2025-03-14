import React from "react";

export const CardProyecto = ({ titulo, descripcion, enlace }) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center w-full flex flex-col ">
      <h3 className="text-xl font-bold text-gray-800">{titulo}</h3>
      <p className="text-gray-600 my-2">{descripcion}</p>
      <a 
        href={enlace} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition "
      >
        Ver Proyecto
      </a>
    </div>
  );
};