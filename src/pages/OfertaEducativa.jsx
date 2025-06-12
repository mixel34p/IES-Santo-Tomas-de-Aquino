import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OfertaEducativa.css';

const ofertas = [
  { nombre: '1º ESO', ruta: '/oferta-educativa/1eso', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: '2º ESO', ruta: '/oferta-educativa/2eso', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: '3º ESO', ruta: '/oferta-educativa/3eso', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: '4º ESO', ruta: '/oferta-educativa/4eso', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: '1º Bachillerato', ruta: '/oferta-educativa/1bach', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: '2º Bachillerato', ruta: '/oferta-educativa/2bach', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { nombre: 'Ciclo Formativo de Grado Superior', ruta: '/oferta-educativa/cfgs', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
];

export default function OfertaEducativa() {
  const navigate = useNavigate();
  return (
    <div className="oferta-container">
      <h1 className="oferta-title">Oferta Educativa</h1>
      <p className="oferta-desc">Descubre todas las etapas y ciclos que puedes cursar en el IES Santo Tomás de Aquino:</p>
      <div className="oferta-grid">
        {ofertas.map((oferta, idx) => (
          <button key={idx} className="oferta-btn" onClick={() => navigate(oferta.ruta)}>
            <img src={oferta.icono} alt="icono" className="oferta-icono" />
            <span>{oferta.nombre}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
