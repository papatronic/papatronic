import rp from 'request-promise'; 

export const FETCH_CITIES_BEGIN = 'FETCH_CITIES_BEGIN';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';


async function getCities() {
  const origins = await rp({
    uri: process.env.REACT_APP_ORIGIN_CITIES_LAMBDA_ENDPOINT,
    json: true,
  });
  const destinations = await rp({
    uri: process.env.REACT_APP_DESTINATION_CITIES_LAMBDA_ENDPOINT,
    json: true,
  });
  return { origins, destinations };
}

export const fetchCitiesBegin = () => ({
  type: FETCH_CITIES_BEGIN
});

export const fetchCitiesSuccess = (cities, originCities) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: { cities, originCities }
});

export const fetchCitiesFailure = error => ({
  type: FETCH_CITIES_FAILURE,
  payload: { error }
});

export function fetchCities() {
  return dispatch => {
    dispatch(fetchCitiesBegin());
    return getCities()
    .then(({ origins, destinations }) => {
      return dispatch(fetchCitiesSuccess([...origins, ...destinations], origins));
    })
    .catch(error => {
      dispatch(fetchCitiesFailure(error))
    });
  }
}