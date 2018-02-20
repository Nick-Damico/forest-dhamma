import React from 'react';
import { Link } from 'react-router-dom';

const MonasteryItem = ({ monastery, onMonasteryClick }) => {
  const { name, talks } = monastery;
  return (
    <div className="monastery-container--item" style={{background: `url(${monastery.img_url})`, backgroundSize: 'cover'}}>
      <div className="monastery-container--item-inner">
        <h3 className="monastery-contianer--item-title">{ name }</h3>
        <p>{talks.length} Talks</p>
        <Link to={`/monasteries/${monastery.id}`} className="monastery-item--arrow">&#9660;</Link>
      </div>
    </div>
  )
}

export default MonasteryItem;
