import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import MonasteryList from './containers/monasteriesContainer';
import TeachersContainer from './containers/teachersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonasteryList />
        <TeachersContainer />
      </div>
    );
  }
}

export default App;
