import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonasteries } from '../actions/monasteryActions';
import MonasteryItem from '../components/monasteries/monasteryItem';
import Footer from '../components/static/footer';

class MonasteryContainer extends Component {
  componentDidMount = () => {
    this.props.fetchMonasteries();
  }

  render() {
    const { monasteries, loading } = this.props;
    let monasteryItems;

    if ( loading ) {
      return <h2>Loading...</h2>
    }
    monasteryItems = monasteries.map((monastery, index) => {
      return (
        <MonasteryItem
          key={index}
          monastery={monastery}
        />
      )
    })
    
    return(
      <div className="monastery-container ">
        {monasteryItems}
        <Footer />
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
