import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Departamentos.css';

const info = {
  lengua: {
    nombre: 'Lengua Castellana y Literatura',
    descripcion: 'El departamento de Lengua Castellana y Literatura promueve la competencia comunicativa, la comprensión lectora y la creatividad literaria en todos los niveles educativos.',
    jefe: 'Rebeca Herrero Sanz',
    miembros: ['Paloma Caballero Rodríguez', 'Blanca Velasco García', 'Arancha Valdés Fernández', 'Sheyla Mayor Gómez'],
    materias: ['Lengua Castellana', 'Literatura Universal', 'Conocimiento del lenguaje']
  },
  matematicas: {
    nombre: 'Matemáticas',
    descripcion: 'El departamento de Matemáticas fomenta el razonamiento lógico, la resolución de problemas y el pensamiento científico.',
    jefe: 'José Daniel Benito Martín',
    miembros: ['Marina Vegas Simal', 'José Lucas Vizan Poyo', 'Asunción Pilar García Valero', 'José Antonio Mínguez García', 'Sonia Carrillo Grande'],
    materias: ['Matemáticas', 'Matemáticas Aplicadas', 'Matemáticas académicas', 'CMAT']
  },
  ingles: {
    nombre: 'Inglés',
    descripcion: 'El departamento de Inglés potencia la comunicación en lengua extranjera y la apertura a otras culturas.',
    jefe: 'Laura Barrios Albuena',
    miembros: ['Alexandra Fernández Escribano', 'Evgeniya Ivanova', 'Darío Pérez Largo'],
    materias: ['Inglés']
  },
  ciencias: {
    nombre: 'Ciencias Naturales',
    descripcion: 'El departamento de Ciencias Naturales impulsa la curiosidad científica y el respeto por el medio ambiente.',
    jefe: 'Pilar Alonso-Lasheras Pérez de los Cobos',
    miembros: ['Francisco Miguel García Olmedo', 'Guillermo Jové Alcalde'],
    materias: ['Biología y Geología', 'Anatomía Aplicada', 'Cultura Científica']
  },
  sociales: {
    nombre: 'Geografía e historia',
    descripcion: 'El departamento de Geografía e historia promueve el conocimiento de la historia, la geografía y la sociedad.',
    jefe: 'Mª Ángeles Miguel Hurtado',
    miembros: ['José Carlos San José Alonso', 'María Ramajo Rodríguez', 'Bernardo Casaseca Baños'],
    materias: ['Geografía e Historia', 'Historia de España', 'Historia del Mundo Contemporáneo', 'Historia del Arte']
  },
  tecnologia: {
    nombre: 'Tecnología',
    descripcion: 'El departamento de Tecnología desarrolla la creatividad y la capacidad de innovación en el ámbito técnico.',
    jefe: 'José Manuel Vega Alcalá',
    miembros: ['Jonatan Torres Páramo', 'Lidia González Cabrera'],
    materias: ['Tecnología y digitalización', 'Tecnología e Ingeniería I y II', 'Tecnología Industrial II']
  },
  educacionfisica: {
    nombre: 'Educación Física',
    descripcion: 'El departamento de Educación Física fomenta la vida activa, el deporte y los valores de equipo.',
    jefe: 'Pablo García Sanz',
    miembros: ['Alejandro del Olmo Fernández'],
    materias: ['Educación Física']
  },
  musica: {
    nombre: 'Música',
    descripcion: 'El departamento de Música estimula la sensibilidad artística y la expresión musical.',
    jefe: 'Pedro Capa Espejo',
    miembros: [],
    materias: ['Música']
  },
  plastica: {
    nombre: 'Plástica',
    descripcion: 'El departamento de Plástica potencia la creatividad y la expresión visual.',
    jefe: 'Miguel Díez Pérez',
    miembros: ['Sandra Cancho Panadero'],
    materias: ['Plástica', 'Dibujo Técnico']
  },
  fyq: {   
    nombre: 'Física y Química',
    descripcion: 'El departamento de Física y Química fomenta el pensamiento crítico y la comprensión de los fenómenos naturales.',
    jefe: 'Yolanda Ortega Berzosa',
    miembros: ['Carlos Arroyo Díez', 'Eva Jiménez Rodríguez'],
    materias: ['Física y Química']
  },
  frances: {
    nombre: 'Francés',
    descripcion: 'El departamento de Francés promueve el aprendizaje de la lengua francesa y la cultura francófona.',
    jefe: 'Cristina Yagüe Maza',
    miembros: ['Nuria García Cortés'],
    materias: ['Francés']
  },
  filosofia: {
    nombre: 'Filosofía',
    descripcion: 'El departamento de Filosofía estimula el pensamiento crítico y la reflexión ética.',
    jefe: 'Azucena Gómez de la Calle',
    miembros: ['Ignacio Diez Arauz'],
    materias: ['Filosofía', 'Historia de la Filosofía', 'Valores éticos', 'Psicología']
  }
};

export default function DepartDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dep = info[id];

  if (!dep) return <div className="depart-container"><h2>Departamento no encontrado</h2></div>;

  return (
    <div className="depart-container">
      <button className="depart-btn" style={{marginBottom: '2rem', background: '#fff', color: '#871028', border: '2px solid #871028'}} onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <h1 className="depart-title">{dep.nombre}</h1>
      <div className="depart-desc" style={{maxWidth: 600, margin: '0 auto'}}>
        <p>{dep.descripcion}</p>
      </div>
      <div style={{background:'#fff3f6',borderRadius:16,padding:'1.5rem 2rem',boxShadow:'0 2px 12px #ff6e8b22',maxWidth:400,margin:'2rem auto',border:'1.5px solid #ff6e8b55'}}>
        <div style={{marginBottom:'1rem'}}><b>Jefe de departamento:</b> <span style={{color:'#871028'}}>{dep.jefe}</span></div>
        <div style={{marginBottom:'1rem'}}><b>Miembros del departamento:</b>
          <ul style={{margin:'0.3rem 0 0 1.2rem',padding:0}}>
            {dep.miembros.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
        <div><b>Materias impartidas:</b>
          <ul style={{margin:'0.3rem 0 0 1.2rem',padding:0}}>
            {dep.materias.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
