import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

function Home() {
  const { supported } = useContext(AppContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div>Hello! Im the Home component!</div>
  );
}

export default Home;