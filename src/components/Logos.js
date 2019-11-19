import React from 'react';
import tecNMItcLogo from '../assets/TecNM-ITC-Logo.png';
import '../styles/logos.css';

export default function Logos() {
  return (
    <div className="ImageContainer">
      <img className="TecNMSize" src={tecNMItcLogo} alt="Logo horizontal del Tecnológico Nacional de México seguido del logo del Instituto Tecnológico de Culiacán"></img>
    </div>
  )
}