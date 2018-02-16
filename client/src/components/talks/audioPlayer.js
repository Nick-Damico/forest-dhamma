import React from 'react';
import PlayerHeader from './playerHeader';

const AudioPlayer = ({ talk, teacher }) => {
  const { title, file_url } = talk;
  return (
    <div>
      <PlayerHeader title={ title } teacher={ teacher }  />
      <audio controls>
        <source src={ file_url } type="audio/mpeg" />
        Your Browser does not support the audio element
      </audio>
    </div>
  )
}

export default AudioPlayer;
