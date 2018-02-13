import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries, fetchMonastery } from '../actions/index';
import MonasteryItem from '../components/monastery-item';

class MonasteryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonastery: null,
    }
  }

  componentDidMount = () => {
    this.props.fetchMonasteries()
  }

  onHandleClick = (selectedMonastery) => {
    console.log(selectedMonastery);
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

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryList);
