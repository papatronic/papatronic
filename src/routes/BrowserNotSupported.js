import React, { useContext } from 'react';
import { BrowserContext } from '../contexts/BrowserContext';

function BrowserNotSupported() {
  const browserContext = useContext(BrowserContext);
  return (
    <div>Hello! Im the BrowserNotSupported component!</div>
  );
}

export default BrowserNotSupported;