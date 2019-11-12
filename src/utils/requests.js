import rp from 'request-promise';

export async function getPrediction(type, id) {
  const response = await rp({
    method: 'POST',
    json: true,
    resolveWithFullResponse: true,
    uri: `${process.env.REACT_APP_PREDICT_EC2_ENDPOINT}/predict`,
    body: { type, id }
  });
  return response.body.map(value => value.toFixed(2));
}

export async function getOriginCities() {
  return await rp({
    uri: process.env.REACT_APP_ORIGIN_CITIES_LAMBDA_ENDPOINT,
    json: true,
  });
}

export async function getDestinationCities() {
  return await rp({
    uri: process.env.REACT_APP_DESTINATION_CITIES_LAMBDA_ENDPOINT,
    json: true,
  });
}