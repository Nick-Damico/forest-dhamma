import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import MonasteryList from './containers/monasteries-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonasteryList />
      </div>
    );
  }
}

export default App;
