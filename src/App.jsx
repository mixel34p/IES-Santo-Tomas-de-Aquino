import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/main/header.jsx";
import Home from './pages/home.jsx';
import AllNews from './pages/AllNews';
import NewsDetail from './pages/NewsDetail';



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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
