import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

class Predict extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div>Hello! Im the Predict component!</div>
    );
  }
}

Predict.contextType = AppContext;

export default Predict;