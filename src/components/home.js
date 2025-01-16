// src/components/Home.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li><a href="/home/section1">Seção 1</a></li>
          <li><a href="/home/section2">Seção 2</a></li>
        </ul>
      </nav>
      <Outlet /> {/* Aqui as sub-rotas de Home serão renderizadas */}
    </div>
  );
};

export default Home;
