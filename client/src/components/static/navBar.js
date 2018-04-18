import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="main-navigation">
          <h1 className="navigation-logo">ForestDhamma</h1>
          <ul className="navigation-container">
            <li><NavLink activeClassName="selected" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="selected" to="/monasteries">Talks</NavLink></li>
            <li><NavLink activeClassName="selected" to="/talks/upload">Upload</NavLink></li>
            <li><NavLink activeClassName="selected" to="/api">API</NavLink></li>
          </ul>
      </nav>
    )
  }
}

export default NavBar;
