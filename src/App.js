// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import News from './components/news';      // Componente principal de notícias
import Article from './components/article'; // Componente filho 1
import Update from './components/update';   // Componente filho 2

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/news">Notícias</Link></li>
          <li><Link to="/news/article">Última Notícia</Link></li>
          <li><Link to="/news/update">Atualização</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Rota principal de notícias */}
        <Route path="/news" element={<News />}>
          <Route path="article" element={<Article />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
