import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        Página creada por{' '}
        <a
          href="https://www.linkedin.com/in/beatrizrodriguezmaya/"
          target="blank"
          rel="noopener noreferrer"
        >
          Beatriz Rodríguez
        </a>
        {' para '}
        <a href="https://www.rockthecode.es/" target="blank" rel="noopener noreferrer">
          Rock{'{theCode}'}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
