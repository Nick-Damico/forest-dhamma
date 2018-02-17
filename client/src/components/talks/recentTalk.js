import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { styles } from '../teachers/teacherItem';

const RecentTalk = ({ talk, onHandleClick }) => {
  const { title, created_at, teacher } = talk;
  const { name, profile_img, id } = teacher[0];
  const { imgStyle, teacherList, itemDetails } = styles;
  return(
    <div>
      <h3>Recent Talk</h3>
        <div className="teacherList-item" style={ teacherList }>
          <img style={ imgStyle } src={ profile_img } alt={`profile pic of ${ name }`} />
          <div className="teacherList-item--details" style={ itemDetails }>
            <h4>{ title }</h4>
            <span>{ name } - { moment(created_at).format("MMM Do YYYY") }</span>
            <Link onClick={() => onHandleClick(talk)} to={`/teachers/${id}`}>talks</Link>
          </div>
        </div>
    </div>
  )
}

export default RecentTalk;
