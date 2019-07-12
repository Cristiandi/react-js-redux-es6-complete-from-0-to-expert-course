import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from '../actions';

export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { payload: { city, forecastData } } = action;
      return { ...state, [city]: { forecastData } };
    default:
      break;
  }
  return state;
};

export const getForecastDataFromCities = 
  createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);