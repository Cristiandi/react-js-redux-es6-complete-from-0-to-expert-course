import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core'

import transformWeather from '../../services/transform-weather';
import getUrlWeatherByCity from '../../services/get-url-weather-by-city';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null
    };
  }

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

  render() {
    const { onleWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className={'weatherLocationCont'} onClick={onleWeatherLocationClick}>
        <Location city={city} />
        {
          data ? <WeatherData data={data} /> : <CircularProgress size={50} />
        }
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onleWeatherLocationClick: PropTypes.func.isRequired
}

export default WeatherLocation;
