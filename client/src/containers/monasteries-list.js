import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries, fetchMonastery } from '../actions/index';
import MonasteryItem from '../components/monastery-item';

class MonasteryList extends Component {
  constructor() {
    super();

    this.state = {
      monasteries: [],
    }
  }

  componentDidMount = () => {
    this.props.fetchMonasteries()
  }

  render() {
      // const monasteries = this.props.monasteries.map((monastery, index) => {
      //   return (
      //     <MonasteryItem
      //       key={monastery + index}
      //       monastery={monastery}
      //     />
      //   )
      // })
    return(
      <div>
        MonasteryList Page
        {/* {monasteries} */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    monasteries: state.monasteries
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonasteries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryList);
