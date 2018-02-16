import React from 'react';
import PlaylistItem from './playlistItem';

const TalksPlaylist = ({ teacher, talks }) => {
  const playList = talks.map((talk, index) => <PlaylistItem key={index} teacher={ teacher } talk={ talk } />)
  return (
    <div>
      { playList }
    </div>
  )
}

export default TalksPlaylist;
