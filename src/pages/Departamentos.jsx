import React from 'react';
import './Departamentos.css';
import { useNavigate } from 'react-router-dom';

const departamentos = [
  { id: 'lengua', nombre: 'Lengua Castellana y Literatura', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'matematicas', nombre: 'Matemáticas', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'ingles', nombre: 'Inglés', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'ciencias', nombre: 'Ciencias Naturales', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'sociales', nombre: 'Geografia e Historia', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'tecnologia', nombre: 'Tecnología', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'educacionfisica', nombre: 'Educación Física', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'musica', nombre: 'Música', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'plastica', nombre: 'Plástica', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'fyq', nombre: 'Fisica y Química', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'frances', nombre: 'Francés', icono: 'https://www.svgrepo.com/show/533406/book.svg' },
  { id: 'filosofia', nombre: 'Filosofía', icono: 'https://www.svgrepo.com/show/533406/book.svg' }
];

export default function Departamentos() {
  const navigate = useNavigate();
  return (
    <div className="depart-container">
        <br />
      <h1 className="depart-title">Departamentos</h1>
      <div className="depart-grid">
        {departamentos.map(dep => (
          <button key={dep.id} className="depart-btn" onClick={() => navigate(`/departamentos/${dep.id}`)}>
            <img src={dep.icono} alt="icono" className="depart-icono" />
            <span>{dep.nombre}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
