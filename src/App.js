import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

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
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App;
