import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrimeiraPagina from './components/PrimeiraPagina';
import SegundaPagina from './components/SegundaPagina';
import './css/styles.css'; // Se ainda não fez isso

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/segunda">Segunda Página</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PrimeiraPagina />} />
          <Route path="/segunda" element={<SegundaPagina />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
