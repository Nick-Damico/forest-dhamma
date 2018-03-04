import React from 'react';

const TalkDescription = ({ talk, onHandleClick }) => {
  const { description } = talk;
  if ( !description ) {
    return <h5>No Description available</h5>
  }
  return (
    <div className="description-container">
      <h5>Description</h5>
      { description }
    </div>
  )
}

export default TalkDescription;
