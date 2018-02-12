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
    .then(json => this.setState({ monasteries: json.monasteries }))
  }

  render() {
      const monasteries = this.state.monasteries.map((monastery, index) => {
        return (
          <MonasteryItem
            key={monastery + index}
            monastery={monastery}
          />
        )
      })
    return(
      <div>
        MonasteryList Page
        {monasteries}
      </div>
    )
  }
}

export default MonasteryList;
