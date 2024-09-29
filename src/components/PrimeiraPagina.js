import React, { useState } from 'react';
import '../css/styles.css'; // A importação deve corresponder à estrutura das pastas

function PrimeiraPagina() {
  const [nome, setNome] = useState('');
  const [horaBatida, setHoraBatida] = useState('');

  const baterPonto = () => {
    if (nome === '') {
      alert('Por favor, digite o seu nome.');
      return;
    }
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    setHoraBatida(`Ponto batido por ${nome} às ${hora}`);
  };

  return (
    <div className="container">
      <h1>Sistema de Bater Ponto</h1>
      <div className="form">
        <label htmlFor="nome">Nome do Funcionário:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
        <button onClick={baterPonto}>Bater Ponto</button>
        {horaBatida && <p>{horaBatida}</p>}
      </div>
    </div>
  );
}

export default PrimeiraPagina;
