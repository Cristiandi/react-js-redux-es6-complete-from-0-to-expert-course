import { api_key, url_base_weather } from '../constants/api-url';
import transformForecast from '../services/transform-forecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload }); 
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const FETCH_FORECAST = '';

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url_base_weather}forecast?q=${payload}&appid=${api_key}`;

    // activate in the state a search data indicator
    dispatch(setCity(payload));

    return fetch(url_forecast)
      .then(data => data.json())
      .then(weatherData => {
        const forecastData = transformForecast(weatherData);
        console.log('forecastData', forecastData);

        // modify the global state with the result from the promise
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};