import React from 'react'

import { Parrafo } from '../../components/ParrafoInicial'
import { Card } from '../../components/Card'
import { DivSkills } from '../../components/DivSkills'

export const TechnicalSkills = () => {
  return (
    <section className='w-full mt-4 sm:mt-5 md:mt-6 px-4 sm:px-6 md:px-8'>
      <Parrafo content="Mis Habilidades Técnicas" />

      <section className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6 justify-around mt-6 sm:mt-8 md:mt-10">  
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

        <DivSkills content='Desarrollo web:'>
          <Card content="Aplicaciones del lado del cliente" />
        </DivSkills>
      </section>
    </section>
  )
}




