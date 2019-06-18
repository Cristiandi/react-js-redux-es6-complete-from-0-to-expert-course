import React, { Component } from 'react';
import { 
  Paper,
  AppBar,
  Typography,
  Toolbar } from '@material-ui/core';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForeCastExtendedContainer from './containers/ForecastExtendedContainer';

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
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className={'detail'} >
                <ForeCastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
