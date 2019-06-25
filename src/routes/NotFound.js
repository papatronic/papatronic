import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

function NotFound() {
  const { supported } = useContext(AppContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div>Im the NotFound component!</div>
  );
}

export default NotFound;