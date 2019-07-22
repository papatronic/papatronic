import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import GridContainer from '../components/Grid';
import Navbar from '../components/Navbar';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <GridContainer className="HomeContainer">
        <Navbar className="HomeNavbar">
          <div className="HomeNavbarItem">
            <h4 id="HomeNavbarText">Instituto Tecnológico de Culiacán</h4>
          </div>
        </Navbar>
        <GridContainer className="HomeItemsContainer">
          <GridContainer className="FiltersContainer">
            <div className="ActualPriceContainer">
              <div className="ActualPriceCard">
                
              </div>
            </div>
            <div className="FiltersCardContainer">

            </div>
          </GridContainer>
          <div className="TableContainer"></div>
        </GridContainer>
      </GridContainer>
    );
  }
}

Home.contextType = AppContext;

export default Home;