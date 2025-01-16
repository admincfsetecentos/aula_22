// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Section1 from './components/section1';
import Section2 from './components/section2';
import History from './components/history';
import Team from './components/team';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Sub-rotas para Home */}
        <Route path="/home" element={<Home />}>
          <Route path="section1" element={<Section1 />} />
          <Route path="section2" element={<Section2 />} />
        </Route>

        {/* Sub-rotas para About */}
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
