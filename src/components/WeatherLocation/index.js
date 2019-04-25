import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core'

import transformWeather from '../../services/transform-weather';
import { api_weather } from '../../constants/api-url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Cali',
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }
  
  handleUpdateClick = () => {
    fetch(api_weather)
      .then(response => response.json())
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      })
      .catch(err => { throw err; });
  }

  render() {
    const { city, data } = this.state;
    return (
      <div className={'weatherLocationCont'}>
        <Location city={city} />
        {
          data ? <WeatherData data={data} /> : <CircularProgress size={50} />
        }
      </div>
    );
  }
}

export default WeatherLocation;
