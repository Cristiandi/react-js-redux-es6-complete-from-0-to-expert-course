import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('====================================');
    console.log('handleWeatherLocationClick', city);
    console.log('====================================');
    onSelectedLocation(city);
  };
  const getComponentes = cities => (
    cities.map(city =>
      (
        <WeatherLocation
          key={city}
          city={city}
          onleWeatherLocationClick={() => handleWeatherLocationClick(city) } />
      )
    )
  );

  return (
    <div className={'locationList'}>
      {getComponentes(cities)}
    </div>
  );
};

LocationList.propType = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;