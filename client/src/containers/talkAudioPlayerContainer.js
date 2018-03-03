import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTeachers } from '../actions/teacherActions';
import { addSelectedTalk } from '../actions/selectedTalkActions';
import { addTagToTalk } from '../actions/selectedTalkActions';

import TalksHeader from '../components/talks/talksHeader';
import TalksPlaylist from '../components/talks/talksPlaylist';
import TalkDescription from '../components/talks/talkDescription';
import PlaylistNavbar from '../components/talks/playlistNavbar';
import TalkTags from '../components/talks/talkTags';
import AudioPlayer from '../components/talks/audioPlayer';

class TalkAudioPlayerContainer extends Component {
  constructor() {
    super();

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.state = {
      showPlaylist: true,
      showDescription: false,
      showTags: false,
      tagText: ''
    }
  }
  // Lifecycle Methods
  componentDidMount = () => {
    this.props.fetchTeachers();
  }

  // Helper Methods
  selectedTeacher = () => {
    const { teachers } = this.props;
    const { teacherId } = this.props.match.params;
    return teachers.filter(t => t.id == teacherId)[0];
  }

  // Event Handlers
  onHandleClick = (talk) => {
    this.props.addSelectedTalk( talk );
  }

  onHandleChange = (e) => {
    this.setState({
      tagText: e.target.value,
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const teacher = this.selectedTeacher();
    const talk = this.props.selectedTalk || teacher.talks[0];
    this.props.addTagToTalk( talk, this.state.tagText );
    this.setState( { tagText: '' });
  }

  // Hiding/Showing selected component 'Playlist, Description, Tags'
  onComponentChange = (type) => {
    if ( type === 'talks' ) {
      this.setState({ showPlaylist: true, showDescription: false, showTags: false })
    } else if ( type === 'description') {
      this.setState({ showPlaylist: false, showDescription: true, showTags: false })
    } else {
      this.setState({ showPlaylist: false, showDescription: false, showTags: true })
    }
  }

  render() {
    const { isLoading } = this.props;
    if ( isLoading ) {
      return <h2>Loading...</h2>;
    }

    const selectedTeacher = this.selectedTeacher();
    const { monastery, talks } = selectedTeacher;
    const talk = this.props.selectedTalk || talks[0];

    return (
      <div className="audioplayer-container">
        <TalksHeader monastery={ monastery } teacher={ selectedTeacher } />
        <AudioPlayer talk={ talk } teacher={ selectedTeacher } />
        <div className="playlist-container">
          <PlaylistNavbar onHandleClick={this.onComponentChange} />

          { this.state.showPlaylist
            ? <TalksPlaylist
                talks={ talks }
                teacher={ selectedTeacher }
                onHandleClick={this.onHandleClick}
              /> : null
          }

          { this.state.showDescription
            ? <TalkDescription talk={ talk } /> : null
          }

          { this.state.showTags
            ? <TalkTags
                talk={ talk }
                onHandleChange={this.onHandleChange}
                onHandleSubmit={this.onHandleSubmit}
                tagText={this.state.tagText}
              />
            : null
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    teachers: state.teachers.collection,
    isLoading: state.teachers.isLoading,
    selectedTalk: state.selectedTalk,
   }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTeachers,
    addSelectedTalk,
    addTagToTalk }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkAudioPlayerContainer);
