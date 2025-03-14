import React from "react";

import { Home } from './pages/Home/Home'
import { Header } from './layouts/Header/Header'
import {Footer } from './layouts/Footer/Footer.jsx'


import { EnglishLevel  } from "./pages/EnglishLevel/EnglishLevel";
import { TechnicalSkills } from "./pages/TechnicalSkills/TechnicalSkills";
import { SocialSkills } from "./pages/SocialSkills/SocialSkills";
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience";
import { Studies } from "./pages/Studies/Studies";


import { Routes, Route } from 'react-router-dom';




export const App = () => {
  return (
    <>
      <Header />
      
      

      <Routes>
      <Route path="/"  element = {<Home/>} />

      
      <Route path="/TechnicalSkills"  element = {<TechnicalSkills/>} />
      <Route path="/SocialSkills"  element = {<SocialSkills/>} />
      <Route path="/EnglishLevel"  element = {<EnglishLevel/>} /> 
      <Route path="/ProfessionalExperience"  element = {<ProfessionalExperience/>} />
      <Route path="/Studies"  element = {<Studies/>} />

        
        
        
      </Routes>



      <Footer />
      

      

    </>
  )
}
