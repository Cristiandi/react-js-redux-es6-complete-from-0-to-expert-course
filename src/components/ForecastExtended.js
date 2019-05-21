import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import { api_key, url_base_weather } from '../constants/api-url';
import transformForecast from '../services/transform-forecast';
import sharedInstance from 'jss';

const days = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes' ];
const data = {
  temperature: 10,
  weatherState: 'sun',
  humidity: 10,
  wind: 'normal'
};

class ForecastExtended extends Component {  
  constructor() {
    super();
    this.state = { forecastData: null };
  }
  
  componentDidMount() {
    const url_forecast = `${url_base_weather}forecast?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast)
      .then(data => data.json())
      .then(weatherData => {
        console.log('weatherData', weatherData);
        const forecastData = transformForecast(weatherData);
        console.log('forecastData', forecastData);
        this.setState({ forecastData });
      });
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                      weekDay={forecast.weekDay} hour={forecast.hour}
                      data={forecast.data} />
    ));
  }

  renderProgress() {
    return  <h3>Cargando pronostico extendido...</h3>;
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className={'forecast-title '}>Pronóstico extendido de {city}</h2>
        {
          forecastData ?
            this.renderForecastItemDays(forecastData)
          :
            this.renderProgress()
        }
      </div>
    );
  }
}


ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;