import React from 'react';

const TeachersHeader = ({ monastery }) => {
  return (
    <header className="teachers-header" style={{
       background: `url(${monastery.img_url})`,
       backgroundSize: 'cover',
       backgroundPosition: '0% 30%',
     }}>
      <div className="teachers-header--inner">
          <h2>Teachers <br /><span>of a { monastery.name }</span></h2>
      </div>
    </header>
  )
}

export default TeachersHeader;
