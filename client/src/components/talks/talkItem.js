import React from 'react';
import { styles } from '../teachers/teacherItem';

const TalkItem = (props) => {
  const { name, profile_img, talks } = props.teacher;
  const { title, created_at } = talks;
  const { imgStyle, teacherList, itemDetails } = styles;
  return (
    <div className="teacherList-item" style={ teacherList }>
      <img style={ imgStyle } src={ profile_img } alt={`profile pic of ${ name }`} />
      <div className="teacherList-item--details" style={ itemDetails }>
        <h4>{ title }</h4>
        <span>{ name } - { created_at }</span>
      </div>
    </div>
  )
}

export default TalkItem;
