import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { LiNav } from '../../components/LiNavbar'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-gradient-to-r from-sky-500 to-blue-700 flex flex-col md:flex-row justify-between items-center shadow-lg rounded-b-xl">
      <div className="w-full md:w-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl md:text-2xl tracking-wide">
          MI PORTAFOLIO
        </h1>
        
        {/* Botón hamburguesa para móvil */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <Navbar>
        <ul className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto mt-4 md:mt-0`}>
          <LiNav route='/' content='Inicio'/>
          <LiNav route='TechnicalSkills' content='Technical Skills'/>
          <LiNav route='SocialSkills' content='Social Skills'/>
          <LiNav route='EnglishLevel' content='English Level'/>
          <LiNav route='ProfessionalExperience' content='Professional Experience'/>  
          <LiNav route='Studies' content='Studies'/> 
        </ul>
      </Navbar>
    </header>
  );
};