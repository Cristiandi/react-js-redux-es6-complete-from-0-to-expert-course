import React, { Component } from 'react';
import { 
  Paper,
  AppBar,
  Typography,
  Toolbar } from '@material-ui/core';
import { Grid, Col, Row } from 'react-flexbox-grid'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
  handleSelectedLocation = city => {
    console.log('====================================');
    console.log('handleSelectionLocation', city);
    console.log('====================================');
  }
  render() {
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
                <ForecastExtended city={'Cali, Co'} />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
