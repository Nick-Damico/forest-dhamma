import React from 'react';

const PlayerHeader = ({ title, teacher }) => {
  return (
    <div className="audioplayer-header">
      <h2>'{ title }'</h2>
      <h5>{ teacher.name }</h5>
    </div>
  )
}

export default PlayerHeader;
