import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeaterExtraInfo from './WeaterExtraInfo';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
  <div className={'weatherDataCont'}>
    <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    <WeaterExtraInfo humidity={humidity} wind={wind}/>
  </div>
);

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }).isRequired
};

export default WeatherData;
