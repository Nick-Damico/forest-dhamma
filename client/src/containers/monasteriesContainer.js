import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries, fetchMonastery } from '../actions/monasteryActions';
import MonasteryItem from '../components/monasteryItem';

class MonasteryContainer extends Component {
  componentDidMount = () => {
    this.props.fetchMonasteries();
  }

  onHandleClick = (selectedMonastery) => {
    this.props.fetchMonastery(selectedMonastery);
  }
  componentDidUpdate() {
    console.log('render');
  }

  render() {
    const { monasteries } = this.props;
    let monasteryItems;
    if (monasteries) {
      monasteryItems = monasteries.map((monastery, index) => {
        return (
          <MonasteryItem
            key={index}
            monastery={monastery}
            onMonasteryClick={selectedMonastery => this.onHandleClick(selectedMonastery)}
          />
        )
      })
    }
    return(
      <div>
        MonasteryList Page
        {monasteryItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    monasteries: state.monasteryState.monasteries
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonasteries, fetchMonastery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryContainer);
