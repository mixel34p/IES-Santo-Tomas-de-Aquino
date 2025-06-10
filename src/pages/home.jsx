import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'

export default function Home() {
  return (
    <>
        <br/>
        <br/>
        <div className="banner">
          <h1 className="home-title">Bienvenido al IES Santo Tomás de Aquino.</h1>
          <button className="intro-button"><img src="https://www.svgrepo.com/show/533406/book.svg" className='icon'></img>Oferta educativa</button>
        </div>
        <div className="homepage">
            <p>

            </p>
        </div>
    </>
  )
}