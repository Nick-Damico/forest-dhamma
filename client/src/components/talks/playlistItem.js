import React from 'react';
import moment from 'moment';
import { styles } from '../teachers/teacherItem';

const playlistItem = ({ teacher, talk, onHandleClick }) => {
  const { name, profile_img } = teacher;
  const { title, favorites, created_at } = talk;
  const { imgStyle, teacherList, itemDetails } = styles;
  return (
    <div className="teacherList-item" style={ teacherList }>
      <img style={ imgStyle } src={ profile_img } alt={`profile pic of ${ name }`} />
      <div className="teacherList-item--details" style={ itemDetails }>
        <h4>{ title }</h4>
        <span>{ moment(created_at).format("MMM Do YYYY") } { `${favorites} favorites` }</span>
        <button onClick={() => onHandleClick(talk)}>Play</button>
      </div>
    </div>
  )
}

export default playlistItem;
