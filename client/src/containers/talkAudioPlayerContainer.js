import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedTeacher } from '../actions/selectedTeacherActions';
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

  componentDidMount = () => {
    this.props.fetchSelectedTeacher( this.props.match );
  }

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
    this.props.addTagToTalk( this.props.selectedTalk, this.state.tagText );
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
    const { loading, teacher } = this.props;
    if ( loading ) {
      return <h2>Loading...</h2>;
    }
    const { monastery, talks } = teacher;
    const talk = this.props.selectedTalk || teacher.talks[0];

    return (
      <div>
        <TalksHeader monastery={ monastery } teacher={ teacher } />
        <AudioPlayer talk={ talk } teacher={ teacher } />
        <PlaylistNavbar onHandleClick={this.onComponentChange} />

        { this.state.showPlaylist
          ? <TalksPlaylist
              talks={ talks }
              teacher={ teacher }
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
  return bindActionCreators({
    fetchSelectedTeacher,
    addSelectedTalk,
    addTagToTalk }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkAudioPlayerContainer);


// todo: selecting a Most Favorited talk or Most Recent Talk needs to some way pass this info to this
// Container render.
