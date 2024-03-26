import React from 'react';

function MapaContato() {
  const numeroWhatsApp = '550000000000'; // Substitua pelo seu número de WhatsApp
  const mensagem = encodeURIComponent('Olá, gostaria de entrar em contato!');
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  return (
    <div>
      <h2>Contato</h2>
      <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">Enviar Mensagem no WhatsApp</a>
      <h2>Localização</h2>
      {/* Exemplo simples de mapa */}
      <iframe
        title="localizacao"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4486024915436!2d-46.65658448444526!3d-23.589297884667676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc24e877c9%3A0x1ce4126a502745ee!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1sen!2sbr!4v1642514074954"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapaContato;
