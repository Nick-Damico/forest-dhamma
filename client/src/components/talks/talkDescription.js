import React from 'react';

const TalkDescription = ({ talk, onHandleClick }) => {
  const { description } = talk;
  if ( !description ) {
    return <h5>No Description available</h5>
  }
  return (
    <div>
      <h5>Description</h5>
      { description }
    </div>
  )
}

export default TalkDescription;
