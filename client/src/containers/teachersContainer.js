import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class TeachersContainer extends Component {

  render() {
    const { selectedMonastery } = this.props;
    let content = selectedMonastery ? <h1>{selectedMonastery.name}</h1> : <h1>hello</h1>;
    return content
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({},dispatch)
}

function mapStateToProps(state) {
  return { selectedMonastery: state.monasteryState.selectedMonastery }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
