import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { shorten } from '../../helper';

const RecentTalk = ({ talk, onHandleClick }) => {
  const { title, created_at, teacher } = talk;
  const { name, profile_img, id } = teacher;
  return(
    <div>
      <h3 className="teachers-list--title">Recent Talk</h3>
        <div className="teachers-list--item">
          <img className="teacher-img" src={ profile_img } alt={`profile pic of ${ name }`} />
          <div className="teachers-list--item--details">
            <h4>{ shorten(title, 30) }</h4>
            <p>{ moment(created_at).format("MMM Do YYYY") }</p>
          </div>
          <Link className="teachers-list--arrow"
                onClick={() => onHandleClick(talk)}
                to={`/teachers/${id}`}>>
          </Link>
        </div>
    </div>
  )
}

export default RecentTalk;
