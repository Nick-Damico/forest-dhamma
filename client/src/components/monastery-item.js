import React from 'react';

const MonasteryItem = ({ monastery, onMonasteryClick }) => {
  const { name, talks } = monastery;
  return (
    <div>
      <h3>{name}</h3>
      <p>{talks.length} Talks</p>
      <a onClick={() => onMonasteryClick(monastery)}>+</a>
    </div>
  )
}

export default MonasteryItem;
