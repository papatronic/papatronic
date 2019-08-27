import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import FormControl from '@material-ui/core/FormControl';
import Radio from '../components/Radio';
import Select from '../components/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import rp from 'request-promise';
import moment from 'moment-timezone';
import '../styles/home.css';
import { RadioGroup } from '@material-ui/core';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todaysPrice: 0,
      markets: [{text: 'Culiacán', value: 10}, {text:'Los Ángeles', value: 20}],
      radios: [{ value: 'Origen', label: 'Origen' }, { value: 'Destino', label: 'Destino' }],
      selectedDate: moment().format(),
      errorInRequest: false,
    };
    this.handleOnCheck = this.handleOnCheck.bind(this);
  }

  async handleOnCheck() {
    await this.setState({
      origin: !this.state.origin
    });
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
              <div className="FilterCardItems">
                <Select markets={this.state.markets} />
                <FormControl>
                  <RadioGroup>
                    {this.state.radios.map(radio => <Radio key={radio.value} {...radio} />)}
                  </RadioGroup>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd-MM-yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    // value={selectedDate}
                    // onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
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