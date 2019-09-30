import React, { Component } from 'react';
import rp from 'request-promise';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import moment from 'moment-timezone';
import Chart from '../components/Chart';
import Nav from '../components/Nav';
import FilterCard from '../components/Card';
import DailyPrice from '../components/DailyPrice';
import Table from '../components/Table';
import '../styles/homev2.css';
moment.locale('es');

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: 10,
      chartKeys: ['precio'],
      chartData: [
        { dia: `${moment().format('dd')} ${moment().date()} de ${moment().format('MMM')}`, precio: 10 },
        { dia: `${moment().add(1, 'days').format('dd')} ${moment().add(1, 'days').date()} de ${moment().add(1, 'days').format('MMM')}`, precio: 15 },
        { dia: `${moment().add(2, 'days').format('dd')} ${moment().add(2, 'days').date()} de ${moment().add(2, 'days').format('MMM')}`, precio: 20 },
        { dia: `${moment().add(3, 'days').format('dd')} ${moment().add(3, 'days').date()} de ${moment().add(3, 'days').format('MMM')}`, precio: 10 },
        { dia: `${moment().add(4, 'days').format('dd')} ${moment().add(4, 'days').date()} de ${moment().add(4, 'days').format('MMM')}`, precio: 11 }
      ],
      markets: [{key: 10, text: 'Culiacán', value: 10}, {key: 20, text:'Los Ángeles', value: 20}],
      selectedMarket: '',
      selectedMarketObj: {},
      radios: [{ key: 1, value: 'Origen', label: 'Origen' }, { key: 2, value: 'Destino', label: 'Destino' }],
      selectedDirection: 'Origen',
      selectedDate: moment().format(),
      errorInRequest: false,
    };
    this.currencyFormatter = new Intl.NumberFormat('es-MX', { currency: 'MXN', style: 'currency' });
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleOnFilter = this.handleOnFilter.bind(this);
  }

  async handleOnSelect(event) {
    console.log('im being clicked!!')
    await this.setState({
      selectedMarket: event.target.value,
      selectedMarketObj: event.target,
    });
  }

  async handleDirectionChange(event) {
    await this.setState({
      selectedDirection: event.target.value
    });
  }

  handleOnFilter() {}

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
      await this.setState(predictions);
    } catch (error) {
      await this.setState({ errorInRequest: true });
    }
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div className="Grid Container CustomFontSize">
        <Nav/>
        <div className="Grid InformationContainer">

          <div className="FilterComponent">
            <FilterCard
              selectedMarket={this.state.selectedMarket}
              selectedDirection={this.state.selectedDirection}
              markets={this.state.markets}
              radios={this.state.radios}
              text="Filter"
              handleOnSelect={this.handleOnSelect}
              handleDirectionChange={this.handleDirectionChange}
              handleOnFilter={this.handleOnFilter}
            />
          </div>

          <div className="Grid InformationElements">

            <div className="Grid Chart">
              <div style={{position: 'relative', height: '100%', width: '100%'}}>
                <div style={{position: 'absolute', height: '100%', width: '100%'}}>
                  <Chart chartKeys={this.state.chartKeys} chartData={this.state.chartData} />
                </div>
              </div>
            </div>

            <div className="Grid InformationTextElements">

              <div className="DailyPrice">
                <DailyPrice currencyFormatter={this.currencyFormatter} price={this.state.todaysPrice} />
              </div>

              <div className="Table">
                <Table currencyFormatter={this.currencyFormatter} rows={this.state.chartData} />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;