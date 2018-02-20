import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <h1 className="navigation-logo">ForestDhamma</h1>
        <ul className="navigation-container">
          <li className="selected"><Link to="/">Home</Link></li>
          <li><Link to="/monasteries">Talks</Link></li>
          <li><Link to="/talks/upload">Upload</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
