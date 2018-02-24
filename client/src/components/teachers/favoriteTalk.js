import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../../icons/heart.svg';
import {shorten} from '../../helper';

const FavoriteTalk = ({ talk, onHandleClick }) => {
  const { title, favorites, teacher } = talk;
  const { name, profile_img, id } = teacher[0];
  return(
    <div>
        <h3 className="teachers-list--title">Favorite Talk</h3>
        <div className="teachers-list--item">
          <img className="teacher-img"  src={ profile_img } alt={`profile pic of ${ name }`} />
          <div className="teachers-list--item--details">
            <h4>{ shorten(title, 30) }</h4>
            <p><img src={heart} alt="" className="heart-logo" />{`${favorites} favorites`}</p>
          </div>
            <Link className="teachers-list--arrow"
                  onClick={() => onHandleClick(talk)}
                  to={`/teachers/${id}`}>>
            </Link>
        </div>
    </div>
  )
}

export default FavoriteTalk;
