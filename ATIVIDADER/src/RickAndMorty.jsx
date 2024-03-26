import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RickAndMorty() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setPersonagens(response.data.results);
      })
      .catch(error => console.error("Erro ao buscar dados da API:", error));
  }, []);

  return (
    <div>
      <h2>Personagens de Rick and Morty</h2>
      <div>
        {personagens.map(personagem => (
          <div key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} style={{ width: '100px', height: '100px' }} />
            <h3>{personagem.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RickAndMorty;
