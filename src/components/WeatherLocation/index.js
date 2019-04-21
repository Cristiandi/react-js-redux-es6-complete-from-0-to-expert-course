import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Cali',
      data: {
        temperature: 28,
        weatherState: 'sun',
        humidity: 10,
        wind: '10 m/s'
      }
    };
  }
  

  handleUpdateClick = () => {
    this.setState({
      data: {
        weatherState: 'rain',
        temperature: 16,
        humidity: 30,
        wind: '15 m/s'
      }
    });
    console.log('Actualizado');
  }

  render() {
    const { city, data } = this.state;
    return (
      <div className={'weatherLocationCont'}>
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick} >Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
