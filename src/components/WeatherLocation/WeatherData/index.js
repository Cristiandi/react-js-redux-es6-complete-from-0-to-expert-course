import React from 'react';
import WeaterTemperature from './WeaterTemperature';
import WeaterExtraInfo from './WeaterExtraInfo';
import './styles.css';

const WheaterData = () => (
  <div className={'weatherDataCont'}>
    <WeaterTemperature temperature={20} weaterState={'sun'} />
    <WeaterExtraInfo humidity={80} wind="10m/s" />
  </div>
);

export default WheaterData;
