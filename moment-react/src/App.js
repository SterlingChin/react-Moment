import React, { Component } from 'react';
import Clock from './Clock';
import Weather from './Weather';
import Quote from './Quote';
import Menu from './Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Weather />
        <Quote />
        <Menu />
      </div>
    );
  }
}

export default App;
