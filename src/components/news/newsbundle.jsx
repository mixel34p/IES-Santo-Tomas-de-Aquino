import React from 'react'
import { useState, useEffect } from 'react'
import './newsbundle.css'

export default function Home() {
  const noticias = [
    {
      title: "Nuevo laboratorio inaugurado en el Instituto Central",
      text: "El Instituto Central ha inaugurado un laboratorio de última generación para investigaciones científicas."
    },
    {
      title: "Estudiantes ganan concurso nacional de robótica",
      text: "Un equipo del Instituto se llevó el primer lugar en el concurso nacional de robótica realizado en la capital."
    },
    {
      title: "El Instituto lanza campaña ecológica",
      text: "Con el objetivo de reducir residuos, el Instituto lanzó una campaña de reciclaje liderada por sus estudiantes."
    },
    {
      title: "Exalumnos del Instituto crean startup tecnológica",
      text: "Dos exalumnos fundaron una startup enfocada en inteligencia artificial con sede en Silicon Valley."
    },
    {
      title: "Profesores publican investigación sobre energías renovables",
      text: "Un grupo de docentes publicó en una revista científica internacional un estudio sobre energía solar."
    },
    {
      title: "El Instituto ofrece nuevas becas para estudiantes destacados",
      text: "A partir del próximo semestre, se entregarán becas del 100% a los mejores promedios académicos."
    },
    {
      title: "Simulacro de evacuación se realiza con éxito",
      text: "El Instituto realizó un simulacro de evacuación con la participación de todo el alumnado y cuerpo docente."
    },
    {
      title: "Nueva biblioteca digital disponible para la comunidad",
      text: "Se ha habilitado una plataforma en línea con acceso a más de 10,000 libros y recursos educativos."
    },
    {
      title: "Estudiante desarrolla app para mejorar la salud mental",
      text: "Una estudiante del último año creó una aplicación que ayuda a gestionar el estrés y la ansiedad."
    },
    {
      title: "El Instituto celebra su 50 aniversario",
      text: "Con un evento especial, el Instituto conmemoró 50 años de compromiso con la educación de calidad."
    }

  ]
  return (
    <>
        <div>
          <h1>Noticias</h1>
        </div>
        {noticias.slice(0,2).map((noticia, index) => (
         <div className='noticiadiv' key={index}>
          <h1>{noticia.title}</h1>
          <p>{noticia.text}</p>
        </div>
        ))}
    </>
  )
}