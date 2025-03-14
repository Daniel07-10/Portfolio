import React from 'react'
import yo from '../../assets/images/yo.jpg'

export const Home = () => {
  return (
    <>
      <section className="w-full min-h-[50vh] flex flex-col items-center mt-6 sm:mt-8 md:mt-10 text-center px-4 sm:px-6 md:px-8">
        <img 
          src={yo} 
          alt="Foto de perfil" 
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-3 sm:mb-4 object-cover" 
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3"> 
          José Daniel Bañol 
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xs sm:max-w-md md:max-w-lg mt-1 sm:mt-2 text-justify">
          Soy un desarrollador apasionado por la tecnología, con muchas ganas de aprender y especializarme en front-end, aunque no me niego al back-end, unas de mis metas son: ser uno de los mejores en lo que hago, tener un excelente perfil, estar bien posicionado en una buena empresa y estar bien economicamente con lo que disfruto hacer.
        </p>
      </section>
    </>
  )
}



