export const SELECTED_CITY = 'SELECTED_CITY';

export const setCity = city => ({
  type: SELECTED_CITY,
  payload: { city }
});