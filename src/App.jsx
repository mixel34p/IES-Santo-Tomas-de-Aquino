import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/main/header.jsx";
import Home from './pages/home.jsx';
import AllNews from './pages/AllNews';
import NewsDetail from './pages/NewsDetail';
import OfertaEducativa from './pages/OfertaEducativa';
import OfertaDetalle from './pages/OfertaDetalle';
import Ubicacion from './pages/Ubicacion';
import Horarios from './pages/Horarios';
import Departamentos from './pages/Departamentos';
import DepartDetalle from './pages/DepartDetalle';
import Calendario from './pages/Calendar'


export function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<AllNews />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/oferta-educativa" element={<OfertaEducativa />} />
            <Route path="/oferta-educativa/:etapa" element={<OfertaDetalle />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/departamentos/:id" element={<DepartDetalle />} />
            <Route path="/calendario" element={<Calendario />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
