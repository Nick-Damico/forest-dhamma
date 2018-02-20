import React from 'react';

const TalksHeader = ({ monastery, teacher }) => {
  return (
    <div className="audioplayer-container-header"
         style={{
          background: `url(${monastery.img_url})`,
          backgroundSize: 'cover'
         }}>
      <h3 className="audioplayer-container-header--title">talks from <br /><span>{ monastery.name } Monastery</span></h3>
      <img className="audioplayer-container-header--img"
           style={{ width: 166, height: 166 }}
           src={teacher.profile_img}
           alt={`profile pic of ${ teacher.name }`}
      />
    </div>
  )
}

export default TalksHeader;
