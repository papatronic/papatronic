import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserContext } from '../contexts/BrowserContext';

function NotFound() {
  const { supported } = useContext(BrowserContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div>Im the NotFound component!</div>
  );
}

export default NotFound;