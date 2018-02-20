import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import MonasteryList from './containers/monasteriesContainer';
import TeachersContainer from './containers/teachersContainer';
import TalkAudioPlayerContainer from './containers/talkAudioPlayerContainer';
import UploadTalkContainer from './containers/uploadTalkContainer';
import NavBar from './containers/navBar';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" render={ Home } />
          <Route exact path="/monasteries" component={ MonasteryList } />
          <Route exact path="/monasteries/:monasteryId" component={ TeachersContainer } />
          <Route exact path="/teachers/:teacherId" component={ TalkAudioPlayerContainer } />
          <Route exact path="/talks/upload" component={ UploadTalkContainer } />
        </div>
      </Router>
    );
  }
}

export default App;
