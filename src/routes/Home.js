import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { GridContainer } from '../components/Grid';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <GridContainer>

      </GridContainer>
    );
  }
}

Home.contextType = AppContext;

export default Home;