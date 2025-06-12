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
        </div>
        <div className="homepage">
            <News />
        </div>
    </>
  )
}