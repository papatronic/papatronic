import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserContext } from '../contexts/BrowserContext';

function Home() {
  const { supported } = useContext(BrowserContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div>Hello! Im the Home component!</div>
  );
}

export default Home;