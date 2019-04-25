import React from 'react';
import PropTypes from 'prop-types';
import * as WeatherIcons from 'weather-icons-react';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from '../../../constants/weathers';
import './styles.css';

const getWeatherIcon = weatherState => {
  const size = 90;
  const color = '#00';

  let icon;
  switch (weatherState) {
    case CLOUD:
      icon = <WeatherIcons.WiCloud className={'wicon'} size={size} color={color} />;
      break;
    case RAIN:
      icon = <WeatherIcons.WiDayRain className={'wicon'}  size={size} color={color} />;
      break;
    case SNOW:
      icon = <WeatherIcons.WiDaySnow className={'wicon'} size={size} color={color} />;
      break;
    case SUN:
      icon = <WeatherIcons.WiDaySunny className={'wicon'} size={size} color={color} />;
      break;
    case THUNDER:
      icon = <WeatherIcons.WiDayThunderstorm className={'wicon'} size={size} color={color} />;
      break;
    case DRIZZLE:
      icon = <WeatherIcons.WiDayShowers className={'wicon'} size={size} color={color} />;
      break;
    default:
      throw new Error(`the icon for ${weatherState}, doesn't is implemented.`);
  }

  return icon;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className={'weatherTemperatureCont'}>
    {getWeatherIcon(weatherState)}
    <span className={'temperature'} >{temperature} </span>
    <span className={'temperatureType'} >{'C°'}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
