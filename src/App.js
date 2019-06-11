import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Paper,
  AppBar,
  Typography,
  Toolbar } from '@material-ui/core';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';

const cities = [
  'Cali, CO',
  'Medellín, CO',
  'Bogota, CO',
  'Barranquilla, CO',
  'Cartagena, CO',
  'Popayan, CO',
  'Pasto, CO'
];

class App extends Component {
  constructor () {
    super();
    this.state =  {
      city: null
    };
  }
  


  handleSelectedLocation = city => {
    this.setState({ city });
    console.log('====================================');
    console.log('handleSelectionLocation', city);
    console.log('====================================');
    this.props.setCity(city);
  }
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position={'sticky'} >
            <Toolbar>
              <Typography variant={'title'} color={'inherit'} > Weather App </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className={'detail'} >
                {
                  city && <ForecastExtended city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);
