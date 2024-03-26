import React from 'react';

// Componente de exemplo para uma das tecnologias
function Card({ titulo, descricao, imagem }) {
  return (
    <div>
      <img src={imagem} alt={titulo} style={{ width: '100px', height: '100px' }} />
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </div>
  );
}

function Tecnologias() {
  // Array de objetos para cada tecnologia
  const tecnologias = [
    // Exemplo para React
    { titulo: 'React', descricao: 'Uma biblioteca JavaScript para criar interfaces de usuário.', imagem: 'https://logo-url.com/react.png' },
    // Adicione outros conforme necessário...
  ];

  return (
    <div>
      {tecnologias.map((tech, index) => (
        <Card key={index} {...tech} />
      ))}
    </div>
  );
}

export default Tecnologias;
