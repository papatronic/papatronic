import React, { Component } from 'react';
import { connect } from "react-redux";
import PredictionSection from '../components/PredictionSection';
import Nav from '../components/Nav';
import FilterCard from '../components/Card';
import Logos from '../components/Logos';
import Loading from '../components/Loading';
import Dialog from '../components/Dialog';
import { fetchPrediction } from '../redux/fetchPredictions';
import { fetchCities } from '../redux/fetchCities';
import { setCity } from '../redux/chartProperties';
import { ErrorInRequestModal, AboutTheSite } from '../constants/strings';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      errorInRequest: false,
      modalOpen: false,
      aboutModalOpen: true,
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnFilter = this.handleOnFilter.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.switchAboutModal = this.switchAboutModal.bind(this);
  }

  async handleOnSelect(event) {
    this.props.dispatch(setCity(event.target.value));
  }

  async handleOnFilter() {
    const id = this.props.city;
    const type = this.props.originCities.findIndex((market) => (market.id === id)) > -1 ? 0 : 1;
    try {
      this.props.dispatch(fetchPrediction(type, id));
    } catch (error) {
      await this.setState({ errorInRequest: true, modalOpen: true, errorMessage: 'Ocurrió un error al momento de consultar las ciudades disponibles. Inténtelo más tarde. Al hacer click en continuar se recargará el sitio.' });
    }
  }

  async componentDidMount() {
    try {
      this.props.dispatch(fetchCities());
      this.props.dispatch(fetchPrediction(0, 42));
    } catch (error) {
      await this.setState({ errorInRequest: true });
    }
  }

  async handleModalClose() {
    await this.setState({
      errorInRequest: false,
    });
  }

  async switchAboutModal() {
    await this.setState((prevState) => {
      return { aboutModalOpen: !prevState.aboutModalOpen }
    });
  }

  render() {
    const { modalOpen, errorInRequest, aboutModalOpen } = this.state;
    const { error: predictionError, loading, predictions, cities, city } = this.props;
    
    return (
      aboutModalOpen ? <Dialog open={aboutModalOpen} title={AboutTheSite.title} message={AboutTheSite.message} handleClose={this.switchAboutModal} /> :
      (errorInRequest || predictionError) ? <Dialog shouldReload={true} open={true} title={ErrorInRequestModal.title} message={ErrorInRequestModal.message} handleClose={this.handleModalClose} /> :
      <div className="Flex CustomFontSize">
        <div>
          <Nav open={aboutModalOpen} title={AboutTheSite.title} message={AboutTheSite.message} handleOpen={this.switchAboutModal} />
        </div>

        <div className="PageElements">

          <div className="LogosAndFilter">
            <Logos />
            <FilterCard
              selectedMarket={city}
              markets={cities}
              handleOnSelect={this.handleOnSelect}
              handleDirectionChange={this.handleDirectionChange}
              handleOnFilter={this.handleOnFilter}
            />
          </div>

          {loading ? <Loading /> : <PredictionSection predictions={predictions} />}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (state.predictionsReducer);

 export default connect(mapStateToProps)(Home);