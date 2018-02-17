import React from 'react';
import PlaylistItem from './playlistItem';

const TalksPlaylist = ({ teacher, talks, onHandleClick }) => {
  const playList = talks.map((talk, index) => {
    return (
      <PlaylistItem
        key={index}
        teacher={ teacher }
        talk={ talk }
        onHandleClick={onHandleClick}
      />)
    })
return (
    <div>
      { playList }
    </div>
  )
}

export default TalksPlaylist;
