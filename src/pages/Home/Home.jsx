import React from 'react'

import yo from '../../assets/images/yo.jpg'


export const Home = () => {
  return (
    <>
      <section className="w-full min-h-[50vh] flex flex-col items-center mt-10 text-center">
        <img src={yo} alt="Foto de perfil" className="w-40 h-40 rounded-full shadow-lg mb-4" />
        <h2 className="text-4xl font-bold text-gray-800"> José Daniel Bañol </h2>
        <p className="text-lg text-gray-700 max-w-lg mt-2 text-justify">
          Soy un desarrollador apasionado por la tecnología, con muchas ganas de aprender y especializarme en front-end, aunque no me niego al back-end, unas de mis metas son: ser uno de los mejores en lo que hago, tener un excelente perfil, estar bien posicionado en una buena empresa y estar bien economicamente con lo que disfruto hacer.
        </p>
        
      </section>
   </>
  )
}


