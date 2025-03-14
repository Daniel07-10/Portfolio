import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { Href } from '../../components/Href';

export const Footer = () => {
  return (
    <footer className="w-full mt-auto py-4 sm:py-5 md:py-7 bg-gray-800 text-white flex flex-col items-center justify-around rounded-t-xl px-4 sm:px-6">
      <p className="text-xs sm:text-sm text-center">&copy; 2025 - Mi Portafolio. Todos los derechos reservados.</p>
      
      <Navbar>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-2 sm:mt-3 md:mt-4">  
          <Href route="https://www.facebook.com/daniel.banol.712" titulo='Facebook' />
          <Href route="https://wa.me/573106321148" titulo='Whatsapp' />
          <Href route="https://github.com/Daniel07-10" titulo='Github' />
        </ul>
      </Navbar>
    </footer>
  );
};





