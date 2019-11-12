import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import moment from 'moment-timezone';
import Chart from '../components/Chart';
import Nav from '../components/Nav';
import FilterCard from '../components/Card';
import DailyPrice from '../components/DailyPrice';
import MyTable from '../components/Table';
import ErrorComponent from '../components/ErrorComponent';
import {
  getPrediction,
  getOriginCities,
  getDestinationCities 
} from '../helpers/requests';
import MSS from '../constants/strings';
import '../styles/home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: 10,
      chartData: [],
      selectedMarkets: [],
      originMarkets: [],
      destinationMarkets: [],
      errorMessage: '',
      selectedMarket: '',
      selectedMarketObj: {},
      selectedDirection: 'Origen',
      selectedDate: moment().format(),
      errorInRequest: false,
      modalOpen: false,
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnFilter = this.handleOnFilter.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  async handleOnSelect(event) {
    await this.setState({
      selectedMarket: event.target.value,
      selectedMarketObj: event.target,
    });
  }

  async handleOnFilter() {
    const type = this.state.selectedDirection === 'Origen' ? 0 : 1;
    const id = this.state.selectedMarket;
    try {
      const prediction = await getPrediction(type, id);
      await this.setState({ chartData: prediction, todaysPrice: prediction[0] });
    } catch (error) {
      await this.setState({ errorInRequest: true, modalOpen: true, errorMessage: 'Ocurrió un error al momento de consultar las ciudades disponibles. Inténtelo más tarde. Al hacer click en continuar se recargará el sitio.' });
    }
  }

  async componentDidMount() {
    try {
      const originCities = await getOriginCities();
      const destCities = await getDestinationCities();
      const prediction = await getPrediction(0, originCities[0].id);
      destCities.shift();
      await this.setState({
        chartData: prediction,
        todaysPrice: prediction[0],
        originMarkets: originCities,
        destinationMarkets: destCities,
        selectedMarkets: originCities, 
        selectedMarket: originCities[0].id, 
        selectedMarketObj: originCities[0]
      });
    } catch (error) {}
  }

  async handleModalClose() {
    window.location.reload();
  }

  render() {
    const {
      modalOpen,
      errorMessage,
      selectedMarket,
      selectedDirection,
      selectedMarkets,
      radios,
      errorInRequest,
      chartData,
      todaysPrice
    } = this.state;
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      errorInRequest ? <ErrorComponent open={modalOpen} message={errorMessage} handleClose={this.handleModalClose} /> :
      <div className="Grid Container CustomFontSize">
        <Nav/>
        <div className="Grid InformationContainer">

          <div className="FilterComponent">
            <FilterCard
              selectedMarket={selectedMarket}
              selectedDirection={selectedDirection}
              markets={selectedMarkets}
              text="Cambiar datos"
              handleOnSelect={this.handleOnSelect}
              handleDirectionChange={this.handleDirectionChange}
              handleOnFilter={this.handleOnFilter}
            />
          </div>

          <div className="Grid InformationElements">

            <div className="Grid Chart">
              <div style={{position: 'relative', height: '100%', width: '100%'}}>
                <div style={{position: 'absolute', height: '100%', width: '100%'}}>
                  <Chart chartData={chartData} />
                </div>
              </div>
            </div>

            <div className="Grid InformationTextElements">

              <div className="DailyPrice">
                <DailyPrice price={todaysPrice} />
              </div>

              <div className="Table">
                <MyTable chartData={chartData} />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;