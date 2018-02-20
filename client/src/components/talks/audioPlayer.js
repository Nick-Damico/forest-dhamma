import React, { Component } from 'react';
import PlayerHeader from './playerHeader';

class AudioPlayer extends Component {
  componentDidUpdate() {
    this.player.pause();
    this.player.load();
    this.player.play();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.talk.file_url !== this.props.talk.file_url
  }

  render() {
    const { talk, teacher } = this.props;
    const { title, file_url } = talk;
    return (
      <div>
        <PlayerHeader title={ title } teacher={ teacher }  />
        <audio className="audioplayer-controls" id="audioPlayer" controls ref={(audio) => { this.player = audio; }}>
          <source src={ file_url } type="audio/mpeg" />
          Your Browser does not support the audio element
        </audio>
      </div>
    )
  }
}

export default AudioPlayer;
