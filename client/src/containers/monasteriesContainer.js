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
    return this.props.monasteries.map((monastery, index) => {
      return (
        <MonasteryItem
          key={index}
          monastery={monastery}
        />
      )
    })
  }

  render() {
    if ( this.props.loading ) {
      return <h2>Loading...</h2>
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
    monasteries: state.monasteries.monasteries,
    loading: state.monasteries.loading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonasteries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryContainer);
