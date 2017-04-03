import React, { Component } from 'react';
import Clock from './Clock';
import Weather from './Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Weather />
      </div>
    );
  }
}

export default App;
