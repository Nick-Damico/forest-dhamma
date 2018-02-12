import React, { Component } from 'react';
import MonasteryItem from '../components/monastery-item';

class MonasteryList extends Component {
  constructor() {
    super();

    this.state = {
      monasteries: [],
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/monasteries')
    .then(response => response.json())
    .then(monasteries => this.setState({ monasteries }))
  }

  render() {
    console.log(this.state.monasteries)
    return(
      <div>
        MonasteryList Page
      </div>
    )
  }
}

export default MonasteryList;
