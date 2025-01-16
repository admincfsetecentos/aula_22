// src/components/About.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <nav>
        <ul>
          <li><a href="/about/history">História</a></li>
          <li><a href="/about/team">Equipe</a></li>
        </ul>
      </nav>
      <Outlet /> {/* Aqui as sub-rotas de About serão renderizadas */}
    </div>
  );
};

export default About;
