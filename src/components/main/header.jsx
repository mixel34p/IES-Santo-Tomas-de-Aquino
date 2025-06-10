import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import Logo from './logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="title">IES Santo Tomás de Aquino</h1>
      </div>
      <div className="header-linksdiv">
        <ul className="headerlinks">
          <li>
            <Link to="/">
              <img src="https://www.svgrepo.com/show/521703/home.svg" className="icon" alt="home" />
              Inicio
            </Link>
          </li>
          <li className="dropdown">
            <Link>
              <img src="https://www.svgrepo.com/show/480128/elementary-middle-and-high-school-3.svg" className="icon" alt="home" />
              Instituto
            </Link>
             <ul className="dropdown-menu">
                <li><Link to="/">Ubicación</Link></li>
                <li><Link to="/">Horarios</Link></li>
                <li><Link to="/">Documentación</Link></li>
            </ul>
           </li>
            <li className="dropdown">
            <Link>
              <img src="https://www.svgrepo.com/show/473036/books.svg" className="icon" alt="home" />
              Secretaria
            </Link>
             <ul className="dropdown-menu">
                <li><Link to="/">Matriculación</Link></li>
                <li><Link to="/">Modelos para imprimir</Link></li>
                <li><Link to="/">PAU 2025</Link></li>
            </ul>
           </li>
           <li className="dropdown">
            <Link>
              <img src="https://www.svgrepo.com/show/483647/student-person.svg" className="icon" alt="home" />
              Alumnos
            </Link>
             <ul className="dropdown-menu">
                <li><Link to="/">Pendientes</Link></li>
                <li><Link to="/">Releo +</Link></li>
                <li><Link to="/">Éxito educativo</Link></li>
                <li><Link to="/">PROA +</Link></li>
            </ul>
           </li>
           <li>
            <Link to="/">
              <img src="https://www.svgrepo.com/show/56020/teacher-briefcase.svg" className="icon" alt="home" />
              Departamentos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
