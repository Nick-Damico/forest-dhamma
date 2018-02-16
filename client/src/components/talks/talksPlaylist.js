import React from 'react';
import PlaylistItem from './playlistItem';

const TalksPlaylist = () => {
  const playList = talks.map((talk, index) => <PlaylistItem teacher={ teacher } talk={ talk } />)
  return (

  )
}

export default TalksPlaylist;
