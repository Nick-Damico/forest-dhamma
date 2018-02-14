import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import MonasteryList from './containers/monasteriesContainer';
import TeachersContainer from './containers/teachersContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={Home} />
          <Route exact path="/monasteries" component={MonasteryList} />
          <Route exact path="/monasteries/:monasteryId" component={TeachersContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
