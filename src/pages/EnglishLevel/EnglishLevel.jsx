import React from 'react'
import { Parrafo } from '../../components/ParrafoInicial'

export const EnglishLevel = () => {
  return (
    <section className="w-full p-8 flex flex-col items-center">
     <Parrafo content="Mi Nivel De Inglés" />
      <div className="w-2/3 bg-gray-200 rounded-full h-8 overflow-hidden mt-4">
        <div className="bg-blue-500 h-full text-lg text-white flex items-center justify-center" >
          B1 - Intermedio
        </div>
      </div>

      <p className="text-gray-700 mt-4 max-w-lg text-justify text-lg ">
        Puedo mantener conversaciones sencillas, leer artículos básicos y escribir mensajes en inglés. Aún mejorando en fluidez y comprensión avanzada.
     </p>

      <span className="text-4xl mt-4">📖</span>
      
    </section>
  )
}


