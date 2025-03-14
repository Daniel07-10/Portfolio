  import React from 'react'

  import { Navbar } from '../Navbar/Navbar'
  import { LiNav } from '../../components/LiNavbar'
  import { Href } from '../../components/Href';





  export const Footer = () => {
    return (
      <footer className="w-full mt-auto py-7 bg-gray-800 text-white flex flex-col  items-center justify-around rounded-t-xl">
        <p className="text-sm">&copy; 2025 - Mi Portafolio. Todos los derechos reservados.</p>
        
        <Navbar>
        
          <ul className="flex gap-10 mt-4">  

            <Href route="https://www.facebook.com/daniel.banol.712" titulo='Facebook' />
            <Href route="https://wa.me/573106321148" titulo='Whatsapp' />
            <Href route="https://github.com/Daniel07-10" titulo='Github' />
            

          </ul>
        
        </Navbar>

      </footer>
    );
  };




