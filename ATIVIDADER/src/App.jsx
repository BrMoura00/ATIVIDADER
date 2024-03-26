import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tecnologias from './Tecnologias';
import Calculadora from './Calculadora';
import MapaContato from './MapaContato';
import RickAndMorty from './RickAndMorty';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Tecnologias"</Link> | 
        <Link to="/calculadora">Calculadora</Link> | 
        <Link to="/mapacontato">Mapa e Contato</Link> | 
        <Link to="/rickandmorty">Rick and Morty</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Tecnologias />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/mapacontato" element={<MapaContato />} />
        <Route path="/rickandmorty" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
}

export default App;
