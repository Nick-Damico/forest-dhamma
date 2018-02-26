import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './components/static/home';
import MonasteryList from './containers/monasteriesContainer';
import TeachersContainer from './containers/teachersContainer';
import TalkAudioPlayerContainer from './containers/talkAudioPlayerContainer';
import UploadTalkContainer from './containers/uploadTalkContainer';
import NavBar from './containers/navBar';
import Footer from './components/static/footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={ Home } />
          <Route exact path="/monasteries" component={ MonasteryList } />
          <Route exact path="/monasteries/:monasteryId" component={ TeachersContainer } />
          <Route exact path="/teachers/:teacherId" component={ TalkAudioPlayerContainer } />
          <Route exact path="/talks/upload" component={ UploadTalkContainer } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
