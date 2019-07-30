import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div className="GridParentContainer">
        <div className="NavbarContainer">
          <nav className="NavbarCard Shadow">
            <h1 className="NavTitle">Instituto Tecnológico de Culiacán</h1>
          </nav>
        </div>
        <div className="ContentGridParentContainer">

          <div className="FilterCardsParentContainer">
            <div className="ActualPriceCard Shadow BorderRadius">
              <div className="ActualPriceText">Precio estimado para el día de hoy</div>
              <div className="ActualPriceNumber">0.00</div>
            </div>
            <div className="FilterCard Shadow BorderRadius">Rick</div>
          </div>

          <div className="ChartCardContainer">
            <div className="ChartCard Shadow BorderRadius">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;

export default Home;