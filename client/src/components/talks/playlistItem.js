import React from 'react';
import moment from 'moment';

const playlistItem = ({ teacher, talk, onHandleClick }) => {
  const { name, profile_img } = teacher;
  const { title, favorites, created_at } = talk;
  return (
    <div className="teacherList-item">
      <img src={ profile_img } alt={`profile pic of ${ name }`} />
      <div className="teacherList-item--details">
        <h4>{ title }</h4>
        <span>{ moment(created_at).format("MMM Do YYYY") } { `${ favorites || 0 } favorites` }</span>
        <button onClick={() => onHandleClick(talk)}>Play</button>
      </div>
    </div>
  )
}

export default playlistItem;
