import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries } from '../actions/monasteryActions';
import MonasteryItem from '../components/monasteryItem';

class MonasteryContainer extends Component {
  componentDidMount = () => {
    this.props.fetchMonasteries();
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
    monasteries: state.monasteries
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonasteries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonasteryContainer);
