import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries } from '../actions/monasteryActions';

import MonasteryItem from '../components/monasteries/monasteryItem';

class MonasteryContainer extends Component {

  componentDidMount = () => {
    this.props.fetchMonasteries();
  }

  renderMonasteries = () => {
    const sortedArr = this.props.monasteries.sort((a,b) => {
      const valA = a.name.split(' ')[0].toLowerCase();
      const valB = b.name.split(' ')[0].toLowerCase();
      let comparison = 0;
      if (valA > valB) {
        comparison = 1;
      } else if (valA < valB) {
        comparison = -1;
      }
      return comparison;
    });
    
    return sortedArr.map((monastery, index) => {
      return (
          <MonasteryItem
            key={index}
            monastery={monastery}
          />
      )
    })
  }

  render() {
    const { monasteries, isLoading } = this.props;
    if ( !monasteries.length && !isLoading ) {
      return <h2>Loading</h2>;
    }

    return(
      <div className="monastery-container ">
        { this.renderMonasteries() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    monasteries: state.monasteries.collection,
    isLoading: state.monasteries.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonasteries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryContainer);
