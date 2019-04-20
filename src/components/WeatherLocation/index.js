import React from 'react';
import Location from './Location';
import WheaterData from './WeatherData';
import './styles.css';

const WheaterLocation = () => (
  <div className={'wheaterLocationCont'}>
    <Location city={'Cali'} />
    <WheaterData />
  </div>
);

export default WheaterLocation;
