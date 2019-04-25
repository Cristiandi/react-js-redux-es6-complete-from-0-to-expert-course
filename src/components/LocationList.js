import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
  <div>
    <WeatherLocation city={'Cali, CO'} />
    <WeatherLocation city={'Medellín, CO'} />
    <WeatherLocation city={'Bogota, CO'} />
  </div>
);

export default LocationList;