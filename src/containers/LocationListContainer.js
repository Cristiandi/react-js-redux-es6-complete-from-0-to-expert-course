import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

import LocationList from '../components/LocationList';
import { setCity } from '../actions';

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

class LocationListContainer extends Component {
  handleSelectedLocation = city => {
    console.log('====================================');
    console.log('handleSelectionLocation', city);
    console.log('====================================');
    this.props.setCity(city);
  }

  render() {
    const { cities } = this.props;
    return (
      <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

export default connect(null, mapDispatchToProps)(LocationListContainer);