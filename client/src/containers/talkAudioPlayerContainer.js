import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedTeacher } from '../actions/selectedTeacherActions';

class TalkAudioPlayerContainer extends Component {
  componentDidMount = () => {
      this.props.fetchSelectedTeacher( this.props.match );
  }

  render() {
    const { selectedTeacher } = this.props;
    console.log(selectedTeacher);
    return (
      <h1>Talks Audio Player</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedTeacher: state.selectedTeacher
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSelectedTeacher }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkAudioPlayerContainer);
