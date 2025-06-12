import React from 'react'
import { useNavigate } from 'react-router-dom'
import './newsbundle.css'
import { noticias } from '../../data/noticias'

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <h1>Noticias Destacadas</h1>
      </div>
      <div className="news-grid">
        {noticias.slice(-4).map((noticia) => (
          <div className='noticiadiv' key={noticia.id}>
            <img src={noticia.image} alt={noticia.title} className="noticia-img" />
            <h2 className="noticia-title">{noticia.title}</h2>
            <p className="noticia-text">{noticia.text}</p>
            <button 
              className='leer-mas-btn' 
              onClick={() => navigate(`/noticias/${noticia.id}`)}
            >
              Leer más
            </button>
          </div>
        ))}
      </div>
      <div className="ver-todas-container">
        <button 
          className="ver-todas-btn"
          onClick={() => navigate('/noticias')}
        >
          Ver todas las noticias
        </button>
      </div>
    </>
  )
}