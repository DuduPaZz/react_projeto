import React from 'react';

function SegundaPagina() {
  return (
    <div className="segunda-container">
      <h1 className="segunda-titulo">Bem-vindo à Segunda Página</h1>
      <p className="segunda-descricao">Esta é a segunda página do seu aplicativo de bater ponto.</p>
      <form className="segunda-form">
        <input type="text" placeholder="Digite seu nome" className="segunda-input" />
        <input type="text" placeholder="Digite seu cargo" className="segunda-input" />
        <button type="submit" className="segunda-botao">Bater Ponto</button>
      </form>
    </div>
  );
}

export default SegundaPagina;
