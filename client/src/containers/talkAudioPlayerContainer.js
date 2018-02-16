import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedTeacher } from '../actions/selectedTeacherActions';
import TalksHeader from '../components/talks/talksHeader';

class TalkAudioPlayerContainer extends Component {
  componentDidMount = () => {
      this.props.fetchSelectedTeacher( this.props.match );
  }

  render() {
    const { loading, teacher } = this.props;

    if ( loading ) {
      return <h2>Loading...</h2>;
    }
    const { monastery, talks } = teacher;

    return (
      <TalksHeader monastery={ monastery } teacher={ teacher } />
    )
  }
}

TalkAudioPlayerContainer.defaultProps = { loading: true, teacher: '' };

function mapStateToProps(state) {
  return {
    teacher: state.selectedTeacher.teacher,
    loading: state.selectedTeacher.loading
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSelectedTeacher }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkAudioPlayerContainer);


// todo: selecting a Most Favorited talk or Most Recent Talk needs to some way pass this info to this
// Container render.

// Fix for render once redux state is returned
// render() {
//   // Don't forget to connect the component to the Redux store yada yada
//   const { loading } = this.props;
//   return (
//     !loading &&
//     <MyComponent />
//   );
// }
