import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

import LocationList from '../components/LocationList';
import { setSelectedCity, setWeather } from '../actions';
import { getWeatherCities } from '../reducers';

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, cities } = this.props;
    setWeather(cities);
  }
  


  handleSelectedLocation = city => {
    console.log('====================================');
    console.log('handleSelectionLocation', city);
    console.log('====================================');
    this.props.setCity(city);
  }

  render() {
    const { citiesWeather } = this.props;
    return (
      <LocationList cities={citiesWeather} onSelectedLocation={this.handleSelectedLocation} />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state) })

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);