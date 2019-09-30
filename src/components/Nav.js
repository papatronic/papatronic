import React from 'react';
import '../styles/nav.css';

export default function Nav() {
  return (
    <nav className="Nav CustomFontSize">
      <div className="NavTextContainer">
        <h5 className="NavText">Instituto Tecnológico de Culiacán</h5>
      </div>
      <div className="NavRefs">
        <a>
          <h5>Nosotros</h5>
        </a>
        <a>
          <h5>¿Cómo funciona?</h5>
        </a>
      </div>
    </nav>
  );
}