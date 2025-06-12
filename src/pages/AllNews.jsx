import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/news/newsbundle.css';
import './AllNews.css';
import { noticias } from '../data/noticias';

export default function AllNews() {
  const navigate = useNavigate();

  // Distribuye las noticias en 4 columnas
  const numeroColumnas = 4;
  const columnas = Array.from({ length: numeroColumnas }, () => []);
  
  noticias.forEach((noticia, index) => {
    const columnaIndex = index % numeroColumnas;
    columnas[columnaIndex].push(noticia);
  });

  return (
    <div className="all-news-container">
      <div className="news-header">
        <h1 className="main-title">Últimas Noticias</h1>
        <p className="subtitle">Mantente informado de todo lo que sucede en nuestro instituto</p>
      </div>
      <div className="news-columns">
        {columnas.map((col, idx) => (
          <div className="news-column" key={idx}>
            {col.map((noticia) => (
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
        ))}
      </div>
    </div>
  );
}