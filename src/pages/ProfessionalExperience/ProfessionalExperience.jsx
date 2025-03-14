import React from 'react'
import { Parrafo } from '../../components/ParrafoInicial'
import { CardProyecto } from '../../components/CardProyecto'

export const ProfessionalExperience = () => {
  return (
    <section className="w-full p-8">
     <Parrafo content="Mi Experiencia Profesional" />

     <Parrafo content='Actualmente no cuento con experiencia profesional, pero a continuación se encontrarán proyectos en los que he trabajado:' />

      <section className='mt-20 grid grid-cols-3 gap-6'>
        <CardProyecto
          titulo = 'Crear Cartas'
          descripcion = 'Aplicación Web sencilla trabajada con api, generador de cartas con información específica'
          enlace = 'https://daniel07-10.github.io/CreateDocument/'
        />

        <CardProyecto
          titulo = 'Calculadora de Notas'
          descripcion = 'Aplicación Web para calcular el promedio de notas segun sus porcentajes y para calcular la nota faltante teniendo dos notas ya definidas '
          enlace = 'https://daniel07-10.github.io/calculate-notes-Daniel/'
        />
        
        <CardProyecto
          titulo = 'Librería'
          descripcion = 'Aplicación Web sobre una librería, cuenta con variedad de filtros posibles para aplicar al buscar'
          enlace = 'https://proyecto-libreria.github.io/library_project/'
        />
        <CardProyecto
          titulo = 'Rick & Morty'
          descripcion = 'Aplicación Web trabajada con api, generador de cartas con información específica, función de buscador por nombre integrado'
          enlace = 'https://daniel07-10.github.io/Rick-Morty/'
        />

        <CardProyecto
          titulo = 'Juego de Palabras'
          descripcion = 'Aplicación Web de un juego de palabras, con temporizador para que cada jugador escriba sus palabras, asi como la funcionalidad de proporcionar una letra aleatoria,etc'
          enlace = 'https://daniel07-10.github.io/juego_palabras/'
        />


      </section>
      

    </section>
  )
}


