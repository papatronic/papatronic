import rp from 'request-promise'; 

export const FETCH_PREDICTION_BEGIN = 'FETCH_PREDICTION_BEGIN';
export const FETCH_PREDICTION_SUCCESS = 'FETCH_PREDICTION_SUCCESS';
export const FETCH_PREDICTION_FAILURE = 'FETCH_PREDICTION_FAILURE';

async function getPrediction(type, id) {
  try {
    const response = await rp({
      method: 'POST',
      json: true,
      uri: `${process.env.REACT_APP_PREDICT_EC2_ENDPOINT}/predict`,
      body: { type, id }
    });
    return response;
  } catch (error) {
    return error;
  }
}

export const fetchPredictionsBegin = () => ({
  type: FETCH_PREDICTION_BEGIN
});

export const fetchPredictionsSuccess = predictions => ({
  type: FETCH_PREDICTION_SUCCESS,
  payload: { predictions }
});

export const fetchPredictionsFailure = error => ({
  type: FETCH_PREDICTION_FAILURE,
  payload: { error }
});

export function fetchPrediction(type, id) {
  return dispatch => {
    dispatch(fetchPredictionsBegin());
    return getPrediction(type, id)
    .then(predictions => {
      dispatch(fetchPredictionsSuccess(predictions));
      return predictions;
    })
    .catch(error => {
      dispatch(fetchPredictionsFailure(error))
    });
  }
}