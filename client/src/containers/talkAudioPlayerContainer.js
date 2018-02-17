import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedTeacher } from '../actions/selectedTeacherActions';
import TalksHeader from '../components/talks/talksHeader';
import TalksPlaylist from '../components/talks/talksPlaylist';
import TalkDescription from '../components/talks/talkDescription';
import PlaylistNavbar from '../components/talks/playlistNavbar';
import TalkTags from '../components/talks/talkTags';
import AudioPlayer from '../components/talks/audioPlayer';

class TalkAudioPlayerContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentTalk: null,
      showPlaylist: true,
      showDescription: false,
    }
  }

  componentDidMount = () => {
      this.props.fetchSelectedTeacher( this.props.match );
  }

  onHandleClick = (talk) => {
    this.setState({
      currentTalk: talk,
    })
  }

  showComponentChange = (type) => {
    if ( type === 'talks' ) {
      this.setState({ showPlaylist: true, showDescription: false })
    } else {
      this.setState({ showPlaylist: false, showDescription: true })
    }
  }

  render() {
    const { loading, teacher } = this.props;
    if ( loading ) {
      return <h2>Loading...</h2>;
    }
    const { monastery, talks } = teacher;
    return (
      <div>
        <TalksHeader monastery={ monastery } teacher={ teacher } />
        <AudioPlayer talk={ this.state.currentTalk || this.props.selectedTalk || talks[0] } teacher={ teacher } />
        <PlaylistNavbar onHandleClick={this.showComponentChange} />
        { this.state.showPlaylist ? <TalksPlaylist talks={ talks } teacher={ teacher } onHandleClick={this.onHandleClick} /> : null }
        { this.state.showDescription ? <TalkDescription talk={ this.state.currentTalk || this.props.selectedTalk || talks[0] } /> : null }
        { this.state.showTags ? <TalkTags /> : null }
      </div>
    )
  }
}

TalkAudioPlayerContainer.defaultProps = { loading: true, teacher: '' };

function mapStateToProps(state) {
  return {
    teacher: state.selectedTeacher.teacher,
    loading: state.selectedTeacher.loading,
    selectedTalk: state.selectedTalk,
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
