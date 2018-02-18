import React from 'react';

const PlaylistNavbar = ({ onHandleClick }) => {
  return (
    <div>
        <button onClick={() => onHandleClick('talks')}>Talks</button>
        <button onClick={() => onHandleClick('description')}>Description</button>
        <button onClick={() => onHandleClick('tags')}>Tags</button>
    </div>
  )
}

export default PlaylistNavbar;
