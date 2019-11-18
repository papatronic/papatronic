import React, { Component } from 'react';
import moment from 'moment';
import Chart from '../components/Chart';
import Nav from '../components/Nav';
import FilterCard from '../components/Card';
import DailyPrice from '../components/DailyPrice';
import MyTable from '../components/Table';
import Logos from '../components/Logos';
import ErrorComponent from '../components/ErrorComponent';
import {
  getPrediction,
  getOriginCities,
  getDestinationCities 
} from '../utils/requests';
import '../styles/home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      prediction: [10],
      selectedMarkets: [],
      originMarkets: [],
      markets: [],
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
    const id = this.state.selectedMarket;
    const type = this.state.originMarkets.includes((market) => (market.id === id)) ? 0 : 1;
    try {
      const prediction = await getPrediction(type, id);
      await this.setState({ prediction });
    } catch (error) {
      await this.setState({ errorInRequest: true, modalOpen: true, errorMessage: 'Ocurrió un error al momento de consultar las ciudades disponibles. Inténtelo más tarde. Al hacer click en continuar se recargará el sitio.' });
    }
  }

  async componentDidMount() {
    try {
      // const originCities = await getOriginCities();
      // const destCities = await getDestinationCities();
      // const prediction = await getPrediction(0, originCities[0].id);
      // destCities.shift();
      // await this.setState({
      //   prediction,
      //   originMarkets: originCities,
      //   destinationMarkets: destCities,
      //   selectedMarket: originCities[0].id, 
      //   selectedMarketObj: originCities[0],
      //   markets: [...originCities, ...destCities]
      // });
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
      markets,
      errorInRequest,
    } = this.state;
    return (
      errorInRequest ? <ErrorComponent open={modalOpen} message={errorMessage} handleClose={this.handleModalClose} /> :
      <div className="Flex CustomFontSize">
        <div>
          <Nav/>
        </div>

        <div className="PageElements">

          <div className="LogosAndFilter">
            <Logos />
            <FilterCard
              selectedMarket={selectedMarket}
              markets={markets}
              handleOnSelect={this.handleOnSelect}
              handleDirectionChange={this.handleDirectionChange}
              handleOnFilter={this.handleOnFilter}
            />
          </div>

          <div className="Chart">
            <Chart prediction={this.state.prediction} />
          </div>
  
          <div className="DailyAndTable">
            <DailyPrice prediction={this.state.prediction[0]} />
            <MyTable prediction={this.state.prediction} />
          </div>

        </div>

      </div>
    );
  }
}