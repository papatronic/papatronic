import React from 'react';
import '../styles/nav.css';
import { InstitutionName } from '../constants/strings';

export default function Nav() {
  return (
    <nav className="Nav CustomFontSize">
      <div className="NavTextContainer">
        <h5 className="NavText">{InstitutionName}</h5>
      </div>
      <div className="NavRefs">
        <a>
          <h5>¿Cómo funciona?</h5>
        </a>
      </div>
    </nav>
  );
}