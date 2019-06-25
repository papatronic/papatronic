import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function BrowserNotSupported() {
  const appContext = useContext(AppContext);
  return (
    <div>Hello! Im the BrowserNotSupported component!</div>
  );
}

export default BrowserNotSupported;