import React from 'react'

import { Parrafo } from '../../components/ParrafoInicial'
import { Card } from '../../components/Card'
import { DivSkills } from '../../components/DivSkills'

import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from 'react-icons/si';


export const TechnicalSkills = () => {
  return (
    <section className='w-full mt-6'>
      <Parrafo content="Mis Habilidades Técnicas" />

      <section className=" flex justify-around mt-10">  
        <DivSkills content='Frontend:'>
          <Card content="React" />
          <Card content="HTML" />
          <Card content="CSS" />
          <Card content="JavaScript" />
          <Card content="Tailwind CSS" />
        </DivSkills>

        <DivSkills content='Control de Versiones:'>
          <Card content="Git" />
          <Card content="Github" />
          
        </DivSkills>

        <DivSkills  content='Desarrollo web:'>

         <Card content="Aplicaciones del lado del cliente" />
        
        </DivSkills>


      </section>
    </section>
  )
}



