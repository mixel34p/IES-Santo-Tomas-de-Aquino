import React from 'react';
import './OfertaEducativa.css';

export default function Ubicacion() {
  return (
    <div className="oferta-container" style={{background: 'linear-gradient(120deg, #fff 70%, #ff6e8b22 100%)', boxShadow: '0 8px 32px rgba(135,16,40,0.10)'}}>
      <h1 className="oferta-title" style={{fontSize: '2.7rem', color: '#871028', marginBottom: '0.5rem', letterSpacing: '1px'}}>Ubicación</h1>
      <div className="oferta-desc" style={{maxWidth: 600, margin: '0 auto', fontSize: '1.15rem'}}>
        <p style={{marginBottom: '1.2rem'}}>El IES Santo Tomás de Aquino se encuentra en la siguiente dirección:</p>
        <div style={{background:'#fff3f6',borderRadius:12,padding:'1.2rem 1.5rem',marginBottom:'1.5rem',boxShadow:'0 2px 12px #ff6e8b22',fontWeight:'bold',color:'#871028',fontSize:'1.1rem',textAlign:'center'}}>
          Calle San Pedro, 48<br/>Íscar (Valladolid) CP 47420
        </div>
        <p style={{marginBottom:'2rem'}}>Puedes encontrarnos fácilmente en el mapa o visitarnos en horario lectivo para cualquier consulta.</p>
      </div>
      <div style={{height: 400, width:'200%',maxWidth:800,margin:'2rem auto',borderRadius:20,overflow:'hidden',boxShadow:'0 4px 24px #87102822',border:'3px solid #ff6e8b55'}}>
        <iframe
          title="IES Santo Tomás de Aquino Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3135980.7943684403!2d-3.6101161!3d39.863457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47257a3dbaedb3%3A0x9fe82eb2f6240713!2sCalle+San+Pedro%2C+48%2C+47420+%C3%8Dscar%2C+Valladolid!5e0!3m2!1ses!2ses!4v1505763788980&wmode=transparent"
          width="100%"
          height="400px"
          style={{border:0, borderRadius:20}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
