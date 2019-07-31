import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from '../components/Select';
import { AppContext } from '../contexts/AppContext';
import rp from 'request-promise';
import moment from 'moment-timezone';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: 0,
      markets: [],
      from: false,
      selectedDate: moment().format(),
      errorInRequest: false,
    };
  }

  handleOnSelect() {

  }

  handleOnSelectedDate() {

  }

  handleOnFilter() {

  }

  async handleOnRefetch() {

  }

  handleOnSwapChart() {

  }

  async componentDidMount() {
    try {
      const predictions = await rp({
        uri: process.env.REACT_APP_PAPATRONIC_API_ENDPOINT,
        resolveWithFullResponse: true,
        json: true,
        qs: {
          date: moment().format()
        }
      });
      this.setState(predictions);
    } catch (error) {
      this.setState({ errorInRequest: true });
    }
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div className="GridParentContainer">
        <div className="NavbarContainer">
          <nav style={{backgroundColor: this.context.colors.BLUE}} className="NavbarCard Shadow">
            <h1 className="NavTitle">Instituto Tecnológico de Culiacán</h1>
          </nav>
        </div>
        <div className="ContentGridParentContainer">

          <div className="FilterCardsParentContainer">
            <div className="ActualPriceCard Shadow BorderRadius">
              <div className="ActualPriceText">Precio estimado para el día de hoy</div>
              <div className="ActualPriceNumber">0.00</div>
            </div>
            <div className="FilterCard Shadow BorderRadius">
              <Select className="FilterCard" markets={this.state.markets} />
            </div>
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