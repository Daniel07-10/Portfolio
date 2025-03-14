import React from 'react'
import { Parrafo } from '../../components/ParrafoInicial'
import { Card } from '../../components/Card'

export const SocialSkills = () => {
  return (
    <section className="w-full p-3 sm:p-8 flex flex-col items-center">
      <Parrafo content="Mis Habilidades Sociales" />

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-4 sm:mt-6 w-full px-2 sm:px-0'>
        <Card content='Comunicación efectiva 🗣️💬' />
        <Card content='Liderazgo 👑🚀' />
        <Card content='Honestidad 🤝🛡️' />
        <Card content='Respeto 🙏✨' />
        <Card content='Trabajo en equipo 🤝' />
        <Card content='Empatía 🤝' />
        <Card content='Escucha activa 🎧'/>
        <Card content='Capacidad de adaptación 🔄' />
        <Card content='Pensamiento crítico 🤔' />
        <Card content='Manejo del estrés 😌' />
      </section>
    </section>
  )
}


