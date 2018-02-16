import React from 'react';

const TalksHeader = ({ monastery, teacher }) => {
  return (
    <div className="talks-header">
      <h3>talks from <span>{ monastery.name } Monastery</span></h3>
      <img style={{ width: 166, height: 166 }} src={teacher.profile_img} alt={`profile pic of ${ teacher.name }`} />
    </div>
  )
}

export default TalksHeader;
