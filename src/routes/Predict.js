import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserContext } from '../contexts/BrowserContext';

class Predict extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.context)
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div>Hello! Im the Predict component!</div>
    );
  }
}

Predict.contextType = BrowserContext;

export default Predict;