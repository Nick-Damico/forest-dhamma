import React from 'react';
const style = {
  background: 'rgb(118, 181, 53)',
  marginRight: 7,
  padding: '6px 8px',
  borderRadius: 4,
  color: 'white',
}
const TagItem = ({ tag }) => {
  return <span style={ style }>{ tag.name }</span>
}

export default TagItem;
