import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewsDetail.css';
import { noticias } from '../data/noticias';

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const noticia = noticias.find(n => n.id === parseInt(id));

  if (!noticia) {
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div className="news-detail-container">
      <br></br>
      <br></br>
      <center><button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button></center>
      <br></br>
      <article className="news-detail">
        <img src={noticia.image} alt={noticia.title} className="detail-image" />
        <h1 className="detail-title">{noticia.title}</h1>
        <p className="detail-text">{noticia.fullText}</p>
      </article>
    </div>
  );
}
