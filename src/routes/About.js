import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

function About() {
  const { supported } = useContext(AppContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div>Hello! Im the about component!</div>
  );
}

export default About;