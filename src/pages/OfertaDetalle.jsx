import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OfertaEducativa.css';

const nombres = {
  '1eso': '1º ESO',
  '2eso': '2º ESO',
  '3eso': '3º ESO',
  '4eso': '4º ESO',
  '1bach': '1º Bachillerato',
  '2bach': '2º Bachillerato',
  'cfgm': 'Ciclo Formativo de Grado Medio',
  'cfgs': 'Ciclo Formativo de Grado Superior',
};

const detalles = {
  '1eso': {
    descripcion: 'Primer curso de la ESO. Enfocado en la adaptación al instituto y el refuerzo de competencias básicas.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/tdnGc9tmgnwoimagen_incrustada1.png',
    asignaturas: ['Lengua Castellana', 'Matemáticas', 'Ciencias Sociales', 'Ciencias Naturales', 'Inglés', 'Educación Física', 'Tecnología', 'Plástica', 'Música']
  },
  '2eso': {
    descripcion: 'Segundo curso de la ESO. Consolidación de conocimientos y desarrollo de habilidades transversales.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/2fisZasMPXlbuimagen_incrustada1.png',
    asignaturas: ['Lengua Castellana', 'Matemáticas', 'Ciencias Sociales', 'Ciencias Naturales', 'Inglés', 'Educación Física', 'Tecnología', 'Plástica', 'Música']
  },
  '3eso': {
    descripcion: 'Tercer curso de la ESO. Profundización en materias y orientación académica.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/19UuFmJP3mtkzimagen_incrustada1.png',
    asignaturas: ['Lengua Castellana', 'Matemáticas', 'Geografía e Historia', 'Biología y Geología', 'Física y Química', 'Inglés', 'Educación Física', 'Tecnología', 'Optativas']
  },
  '4eso': {
    descripcion: 'Cuarto curso de la ESO. Preparación para Bachillerato o Ciclos Formativos.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/14fbLeNhxDt3vimagen_incrustada1.png',
    asignaturas: ['Lengua Castellana', 'Matemáticas', 'Geografía e Historia', 'Física y Química', 'Inglés', 'Educación Física', 'Optativas']
  },
  '1bach': {
    descripcion: 'Primer curso de Bachillerato. Itinerarios de Ciencias y Humanidades/Sociales.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/EWm9FuxZVRCjimagen_incrustada2.png',
    asignaturas: ['Lengua Castellana', 'Filosofía', 'Inglés', 'Matemáticas', 'Biología', 'Física y Química', 'Historia', 'Optativas según itinerario']
  },
  '2bach': {
    descripcion: 'Segundo curso de Bachillerato. Preparación para la EBAU y acceso a la universidad.',
    imagen: 'http://iessantotomasdeaquino.centros.educa.jcyl.es/sitio/upload/img/1Nop8yX35Dgskimagen_incrustada2.png',
    asignaturas: ['Lengua Castellana', 'Historia de España', 'Inglés', 'Matemáticas', 'Biología', 'Física', 'Química', 'Optativas según itinerario']
  },
  'cfgm': {
    descripcion: 'Ciclo Formativo de Grado Medio. Formación profesional en un entorno práctico.',
    imagen: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    asignaturas: ['Módulo profesional 1', 'Módulo profesional 2', 'Módulo profesional 3', 'Formación y Orientación Laboral', 'Empresa e Iniciativa Emprendedora', 'Formación en Centros de Trabajo']
  },
  'cfgs': {
    descripcion: 'Ciclo Formativo de Grado Superior. Especialización en Educación Infantil.',
    imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjepyUN5nERLqKqz5G61HfaCfnqAYCZOzl8Kb23OjrjQ4YSqo4c2IdSNuKC5pSuu-Z9KHVSGUTBlN3pDtlTXPLs9uk_hYYnzPO19E0gliFsK2eSAPZKGzfqqKGTY7eKz7pZMask8-Ms-wIht18W9NEoudmm-iRJgmk9PCP5vPO9zDLQMX865jzvhveSGAMn/s320/LOGO%20DPTO%20DEFI%20GRANDE.png',
    asignaturas: ['Módulo profesional avanzado 1', 'Módulo profesional avanzado 2', 'Módulo profesional avanzado 3', 'Proyecto', 'Formación en Centros de Trabajo']
  },
};

export default function OfertaDetalle() {
  const { etapa } = useParams();
  const navigate = useNavigate();
  const nombre = nombres[etapa] || 'Oferta';
  const detalle = detalles[etapa];

  return (
    <div className="oferta-container">
      <button className="oferta-btn" style={{marginBottom: '2rem', background: '#fff', color: '#871028', border: '2px solid #871028'}} onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <h1 className="oferta-title">{nombre}</h1>
      {detalle && (
        <>
          <div className="oferta-desc" style={{maxWidth: 600, margin: '0 auto'}}>
            <p>{detalle.descripcion}</p>
          </div>
          <img src={detalle.imagen} alt={nombre} style={{scale: 1}}/>
        </>
      )}
      {!detalle && (
        <div className="oferta-desc" style={{maxWidth: 600, margin: '0 auto'}}>
          <p>Aquí irá la información detallada sobre <b>{nombre}</b>.<br/>Puedes personalizar esta página con asignaturas, horarios, salidas profesionales, etc.</p>
        </div>
      )}
    </div>
  );
}
