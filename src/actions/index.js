import { api_key, url_base_weather } from '../constants/api-url';
import transformForecast from '../services/transform-forecast';
import getUrlWeatherByCity from '../services/get-url-weather-by-city';
import transformWeather from '../services/transform-weather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

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

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });

const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);    
      fetch(api_weather)
        .then(response => response.json())
        .then(data => {
          const { cod, message } = data;
          if (!cod.toString().startsWith('2')) {
            throw new Error(message);
          }
          const newWeather = transformWeather(data);

          dispatch(setWeatherCity({ city, weather: newWeather }));

        })
        .catch(err => { throw err; });   
    });
  }
};