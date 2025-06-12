import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import News from '../components/news/newsbundle.jsx';



export default function Home() {
  const  navigate = useNavigate();
  const  goToEducationalOffer = () => {
    navigate('/oferta-educativa');
  }
  return (
    <>
        <br/>
        <br/>
        <div className="banner">
          <h1 className="home-title">Bienvenido al IES Santo Tomás de Aquino.</h1>
          <button className="intro-button" onClick={goToEducationalOffer}><img src="https://www.svgrepo.com/show/533406/book.svg" className='icon'></img>Oferta educativa</button>
          <div style={{marginTop:'1.5rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.7rem'}}>
            <div style={{background:'#fff3f6',borderRadius:14,padding:'1rem 1.5rem',boxShadow:'0 2px 12px #ff6e8b22',display:'flex',flexDirection:'row',alignItems:'center',gap:'2.2rem',marginBottom:'0.5rem',border:'1.5px solid #ff6e8b55'}}>
              <span style={{fontSize:'1.05rem', color:'#871028', fontWeight:600,display:'flex',alignItems:'center'}}><img src="https://www.svgrepo.com/show/533290/phone-flip-alt.svg" alt="tel" style={{width:18,verticalAlign:'middle',marginRight:6}}/>983 611 079</span>
              <span style={{fontSize:'1.05rem', color:'#871028', fontWeight:600,display:'flex',alignItems:'center'}}><img src="https://www.svgrepo.com/show/533225/mail-open-minus.svg" alt="mail" style={{width:18,verticalAlign:'middle',marginRight:6}}/>47005460@educa.jcyl.es</span>
            </div>
            <div style={{display:'flex', gap:'1.2rem', marginTop:'0.5rem'}}>
              <a href="https://www.facebook.com/iessantotomasdeaquino/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" style={{width:58, height: 58}}/>
              </a>
              <a href="https://www.instagram.com/iessantotomasdeaquino/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                <img src="https://www.svgrepo.com/show/452231/instagram.svg" alt="Instagram" style={{width:58, height: 58}}/>
              </a>
            </div>
          </div>
        </div>
        <div className="homepage">
            <News />
        </div>
    </>
  )
}