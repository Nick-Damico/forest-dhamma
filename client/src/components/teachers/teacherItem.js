import React from 'react';
import { Link } from 'react-router-dom';

const TeacherItem = (props) => {
  const { id, name, profile_img, talks } = props.teacher;
  return (
    <div className="teachers-list--item">
        <img src={ profile_img } className="teacher-img" alt={`profile pic of ${ name }`} />
        <div className="teachers-list--item--details">
          <h4>{ name }</h4>
          <p>{ talks.length } Dhamma Talk{talks.length > 1 ? 's' : null}</p>
        </div>
        <Link className="teachers-list--arrow" onClick={() => props.onHandleClick(talks[0])} to={`/teachers/${id}`}>></Link>
    </div>
  )
}

export default TeacherItem;
