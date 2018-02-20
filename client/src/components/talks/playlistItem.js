import React from 'react';
import moment from 'moment';

const playlistItem = ({ teacher, talk, onHandleClick }) => {
  const { name, profile_img } = teacher;
  const { title, favorites, created_at } = talk;
  return (
    <div className="teachers-list--item">
      <img className="teacher-img" src={ profile_img } alt={`profile pic of ${ name }`} />
      <div className="teachers-list--item--details">
        <h4>{ title }</h4>
        <p>{ moment(created_at).format("MMM Do YYYY") } { `${ favorites || 0 } favorites` }</p>
      </div>
      <button onClick={() => onHandleClick(talk)}>&#9658;</button>
    </div>
  )
}

export default playlistItem;
