import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core'

import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/*
  componentDidMount() {
    this.handleUpdateClick();
  }
  
  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);    
    fetch(api_weather)
      .then(response => response.json())
      .then(data => {
        const { cod, message } = data;
        if (!cod.toString().startsWith('2')) {
          throw new Error(message);
        }
        const newWeather = transformWeather(data);

        this.setState({
          data: newWeather
        });
      })
      .catch(err => { throw err; });
  }
 */

const WeatherLocation = ({ onWeatherLocationClick, city, data }) =>  (
  <div className={'weatherLocationCont'} onClick={onWeatherLocationClick}>
    <Location city={city} />
    {
      data ? <WeatherData data={data} /> : <CircularProgress size={50} />
    }
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onleWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }).isRequired
}

export default WeatherLocation;
