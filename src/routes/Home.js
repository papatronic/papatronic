import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import rp from 'request-promise';
import moment from 'moment-timezone';
import Button from '@material-ui/core/Button';
import Select from '../components/Select';
import Radio from '../components/Radio';
import DatePicker from '../components/DatePicker';
import Chart from '../components/Chart';
import Table from '../components/Table';
import { AppContext } from '../contexts/AppContext';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: 10,
      chartKeys: ['precio'],
      chartData: [{
        dia: `${moment().format('dd')} ${moment().date()} de ${moment().format('MMM')}`,
        precio: 10
      },{
        dia: `${moment().add(1, 'days').format('dd')} ${moment().add(1, 'days').date()} de ${moment().add(1, 'days').format('MMM')}`,
        precio: 15
      },{
        dia: `${moment().add(2, 'days').format('dd')} ${moment().add(2, 'days').date()} de ${moment().add(2, 'days').format('MMM')}`,
        precio: 20
      },{
        dia: `${moment().add(3, 'days').format('dd')} ${moment().add(3, 'days').date()} de ${moment().add(3, 'days').format('MMM')}`,
        precio: 10
      },{
        dia: `${moment().add(4, 'days').format('dd')} ${moment().add(4, 'days').date()} de ${moment().add(4, 'days').format('MMM')}`,
        precio: 11
      }],
      markets: [{key: 10, text: 'Culiacán', value: 10}, {key: 20, text:'Los Ángeles', value: 20}],
      selectedMarket: '',
      selectedMarketObj: {},
      radios: [{ key: 1, value: 'Origen', label: 'Origen' }, { key: 2, value: 'Destino', label: 'Destino' }],
      selectedDirection: 'Origen',
      selectedDate: moment().format(),
      errorInRequest: false,
    };
    this.currencyFormatter = new Intl.NumberFormat('es-MX', { currency: 'MXN', style: 'currency' });
    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnDateChange = this.handleOnDateChange.bind(this);
    this.handleOnFilter = this.handleOnFilter.bind(this);
  }

  async handleDirectionChange(event) {
    await this.setState({
      selectedDirection: event.target.value
    });
  }

  async handleOnSelect(event) {
    await this.setState({
      selectedMarket: event.target.value,
      selectedMarketObj: event.target,
    });
  }

  async handleOnDateChange(date) {
    await this.setState({
      selectedDate: date.format(),
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
      this.setState(predictions);
    } catch (error) {
      this.setState({ errorInRequest: true });
    }
  }

  render() {
    return (
      !this.context.supported ? <Redirect to='/browser-not-supported' /> :
      <div className="GridParentContainer CustomFontSize">
        <div className="NavbarContainer">
          <nav style={{backgroundColor: this.context.colors.BLUE}} className="NavbarCard Shadow">
            <h1 className="NavTitle">Instituto Tecnológico de Culiacán</h1>
          </nav>
        </div>
        <div className="ContentGridParentContainer">

          <div className="FilterCardsParentContainer">
            <div className="ActualPriceCard Shadow BorderRadius">
              <div className="ActualPriceText">Precio estimado para el día de hoy</div>
              <div className="ActualPriceNumber">{this.currencyFormatter.format(this.state.todaysPrice)} MXN</div>
            </div>

            <div className="FilterCard Shadow BorderRadius">
              <div className="FilterCardItems">
                <Select selectedMarket={this.state.selectedMarket} handleOnChange={this.handleOnSelect} markets={this.state.markets} />
                <DatePicker value={this.state.selectedDate} onChange={this.handleOnDateChange} />
                <div className="Radios">
                  <Radio value={this.state.selectedDirection} onChange={this.handleDirectionChange} radios={this.state.radios}/>
                </div>
                <Button onClick={this.handleOnFilter} variant="contained">
                  Filtrar
                </Button>
              </div>
            </div>
          </div>

          <div className="ChartCardContainer">
            <div className="ChartCard Shadow BorderRadius">
              <div className="ChartContainer">
                <Chart chartKeys={this.state.chartKeys} chartData={this.state.chartData} />
              </div>
              <div className="ChartTableContainer">
                <Table rows={this.state.chartData} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;
export default Home;