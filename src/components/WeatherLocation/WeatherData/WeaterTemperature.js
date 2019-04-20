import React from 'react';
import PropTypes from 'prop-types';
import * as WheaterIcons from 'weather-icons-react';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from '../../../constants/weathers';
import './styles.css';

const getWheaterIcon = weaterState => {
  const size = 70;
  const color = '#00';

  let icon;
  switch (weaterState) {
    case CLOUD:
      icon = <WheaterIcons.WiCloud className={'wicon'} size={size} color={color} />;
      break;
    case CLOUDY:
      icon = <WheaterIcons.WiDayCloudy className={'wicon'} size={size} color={color} />;
      break;
    case RAIN:
      icon = <WheaterIcons.WiDayRain className={'wicon'}  size={size} color={color} />;
      break;
    case SNOW:
      icon = <WheaterIcons.WiDaySnow className={'wicon'} size={size} color={color} />;
      break;
    case WINDY:
      icon = <WheaterIcons.WiDayWindy className={'wicon'} size={size} color={color} />;
      break;
    case SUN:
      icon = <WheaterIcons.WiDaySunny className={'wicon'} size={size} color={color} />;
      break;
    default:
      throw new Error(`the icon for ${weaterState}, doesn't is implemented.`);
  }

  return icon;
};

const WheaterTemperature = ({ temperature, weaterState }) => (
  <div className={'weatherTemperatureCont'}>
    {getWheaterIcon(weaterState)}
    <span className={'temperature'} >{temperature} </span>
    <span className={'temperatureType'} >{'C°'}</span>
  </div>
);

WheaterTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weaterState: PropTypes.string.isRequired
};

export default WheaterTemperature;
