import React from 'react';
import { styles } from '../teachers/teacherItem';

const FavoriteTalk = ({ talk }) => {
  const { title, favorites, teacher } = talk;
  const { name, profile_img } = teacher[0];
  const { imgStyle, teacherList, itemDetails } = styles;
  return(
    <div>
        <h3>Favorite Talk</h3>
        <div className="teacherList-item" style={ teacherList }>
          <img style={ imgStyle } src={ profile_img } alt={`profile pic of ${ name }`} />
          <div className="teacherList-item--details" style={ itemDetails }>
            <h4>{ title }</h4>
            <span>{ name } - { favorites }</span>
          </div>
        </div>
    </div>
  )
}

export default FavoriteTalk;
