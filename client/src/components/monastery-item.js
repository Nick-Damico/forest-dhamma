import React from 'react';

const MonasteryItem = ({ monastery}) => {
  const { name, talks } = monastery;
  return (
    <div>
      <h3>{name}</h3>
      <p>{talks.length} Talks</p>
      <button>Click</button>
    </div>
  )
}

export default MonasteryItem;
