import { combineReducers } from "redux";

import {
  FETCH_PREDICTION_BEGIN,
  FETCH_PREDICTION_SUCCESS,
  FETCH_PREDICTION_FAILURE,
} from './fetchPredictions';

import {
  FETCH_CITIES_BEGIN,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from './fetchCities';

import {
  SELECTED_CITY
} from './chartProperties';

const initialState = {
  predictions: [],
  cities: [],
  originCities: [],
  city: {},
  loading: false,
  error: null
};

function predictionsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PREDICTION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PREDICTION_SUCCESS:
      return {
        ...state,
        loading: false,
        predictions: JSON.parse(JSON.stringify(action.payload.predictions)),
        someValue: JSON.parse(JSON.stringify(action.payload.predictions)),
      };
    case FETCH_PREDICTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action && action.payload && action.payload.error ? action.payload.error : 'La petición falló. Si el problema persiste, contáctenos.',
        predictions: []
      };
    case FETCH_CITIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload.cities,
        originCities: action.payload.originCities,
        city: action.payload.cities[0].id
      };
    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        cities: []
      };
    case SELECTED_CITY:
      return {
        ...state,
        city: action.payload.city,
        predictions: state.someValue,
      }
    default:
      return state;
  }
}

export default combineReducers({
  predictionsReducer
});