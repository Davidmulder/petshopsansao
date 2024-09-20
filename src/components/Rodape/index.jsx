import React from "react";
import './Rodape.module.css'

const Rodape = () => {
  return (
    <footer className="text-center bg-black text-bg-dark">
    
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/davidmuldersilva/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mx-2"
      >
        <i className="bi bi-linkedin" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      </a>
      <a
        href="https://wa.me/48996143662" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mx-2"
      >
        <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      </a>
      <a
        href="mailto:david.foxmulder@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mx-2"
      >
        <i className="bi bi-envelope" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      </a>
    </div>
    <p className="card-text py-3">
      2024 <i className="bi bi-c-circle"></i> Desenvolvido David Orion. Dados fictícios sem fins comerciais.
    </p>
  </footer>
  );
};

export default Rodape;
