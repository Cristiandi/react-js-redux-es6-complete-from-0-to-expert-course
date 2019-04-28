import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid'
import LocationList from './components/LocationList';
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
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <div className={'details'} ></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
