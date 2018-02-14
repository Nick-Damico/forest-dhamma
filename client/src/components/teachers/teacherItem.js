import React from 'react';

const styles = {
  imgStyle: {
    height: 72,
    width: 72
  },
  teacherList: {
    maxWidth: 415,
    border: '1px solid black',
  },
  itemDetails: {
    display: 'inline-block',
  }
}

const TeacherItem = (props) => {
  const { name, profile_img, talks } = props.teacher;
  const { imgStyle, teacherList, itemDetails } = styles;
  return (
    <div className="teacherList-item" style={ teacherList }>
      <img style={ imgStyle } src={ profile_img } alt={`profile pic of ${ name }`} />
      <div className="teacherList-item--details" style={ itemDetails }>
        <h4>{ name }</h4>
        <p>{ talks.length } Dhamma Talk{talks.length > 1 ? 's' : null}</p>
      </div>
    </div>
  )
}

export default TeacherItem;
