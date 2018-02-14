import React from 'react';
import { Link } from 'react-router-dom';

const MonasteryItem = ({ monastery, onMonasteryClick }) => {
  const { name, talks } = monastery;
  return (
    <div>
      <h3>{name}</h3>
      <p>{talks.length} Talks</p>
      <Link to={`/monasteries/${monastery.id}`}>Click</Link> 
    </div>
  )
}

export default MonasteryItem;
