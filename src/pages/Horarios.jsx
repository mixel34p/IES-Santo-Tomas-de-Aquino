import React from 'react';
import './OfertaEducativa.css';


export default function Horarios() {
  return (
    <div className="oferta-container" style={{background: 'linear-gradient(120deg, #fff 70%, #ff6e8b22 100%)', boxShadow: '0 8px 32px rgba(135,16,40,0.10)'}}>
      <h1 className="oferta-title" style={{fontSize: '2.5rem', color: '#871028', marginBottom: '0.5rem'}}>Horarios</h1>
      <div className="oferta-desc" style={{maxWidth: 700, margin: '0 auto', fontSize: '1.1rem'}}>
        <h2 style={{color:'#871028', fontSize:'1.3rem', marginTop:'2rem'}}>Horario de apertura</h2>
        <p>El Centro permanece abierto, de lunes a viernes, de <b>8.00 a 15.00 h.</b>, los martes de <b>15.45 a 19.20 h.</b> y los jueves de <b>15.45 a 19.20 h.</b></p>
        <h2 style={{color:'#871028', fontSize:'1.3rem', marginTop:'2.5rem'}}>Horario lectivo</h2>
        <p>El horario lectivo comprende de <b>8.30 a 14.25 horas</b>, de lunes a viernes, distribuido en <b>seis períodos lectivos de 50 minutos</b>, separados por intervalos de 5 minutos.<br/>
        Tras el 2º período lectivo y tras el 4º hay dos descansos de 20 minutos.</p>
      </div>
    </div>
  );
}
