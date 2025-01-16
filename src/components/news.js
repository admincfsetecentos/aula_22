// src/components/News.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Para renderizar os componentes filhos

const News = () => {
  return (
    <div>
      <h1>Notícias</h1>
      <p>Aqui você encontra as últimas notícias!</p>
      <Outlet /> {/* Aqui as sub-rotas serão renderizadas */}
    </div>
  );
};

export default News;
