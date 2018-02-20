import React from 'react';

const PlaylistNavbar = ({ onHandleClick }) => {
  return (
    <div className="playlist-navbar">
        <a onClick={() => onHandleClick('talks')}>Talks</a>
        <a onClick={() => onHandleClick('description')}>Description</a>
        <a onClick={() => onHandleClick('tags')}>Tags</a>
    </div>
  )
}

export default PlaylistNavbar;
