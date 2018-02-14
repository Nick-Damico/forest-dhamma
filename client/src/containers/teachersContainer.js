import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMonastery } from '../actions/monasteryActions';


class TeachersContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMonastery(this.props.match)
  }

  render() {
    return <h1>Teachers of monastery</h1>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMonastery }, dispatch)
}

function mapStateToProps(state) {
  return { selectedMonastery: state.monasteryState.selectedMonastery }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
