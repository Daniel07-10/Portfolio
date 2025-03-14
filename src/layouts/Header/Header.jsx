import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { LiNav } from '../../components/LiNavbar'

export const Header = () => {
  return (
    <header className="w-full py-4 px-8 bg-gradient-to-r from-sky-500 to-blue-700 flex justify-between items-center shadow-lg rounded-b-xl">
      <h1 className="text-white font-bold text-2xl tracking-wide">
        MI PORTAFOLIO
      </h1>

      <Navbar>

        <ul className="flex gap-6 items-center">  

          <LiNav route='/' content= 'Inicio'/>
          <LiNav route='TechnicalSkills' content= 'technical skills'/>
          <LiNav route='SocialSkills' content= 'social skills'/>
          <LiNav route='EnglishLevel' content= 'English Level'/>
          <LiNav route='ProfessionalExperience' content= 'professional experience'/>  
          <LiNav route='Studies' content= 'studies'/> 
            
        </ul>

      </Navbar>

    </header>
  );
};




