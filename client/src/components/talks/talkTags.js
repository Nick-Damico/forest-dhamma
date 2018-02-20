import React from 'react';
import TagItem from './tagItem';

const TalkTags = ({ talk, onHandleChange, onHandleSubmit, tagText }) => {
  const talkTags = talk.tags.map((tag, index) => <TagItem key={ index } tag={ tag } />);
  return (
      <div className="tags-container">
          <h5>Tags</h5>
          <div className="tags-container--items">
            { talkTags }
          </div>
          <div style={ { marginBottom: 10}}>
            <form onSubmit={ onHandleSubmit }>
              <label>Add Tag: </label>
              <input onChange={ onHandleChange } name="tags_attributes[0][name]" value={ tagText } type="text" />
              <input type="submit" />
            </form>
          </div>
      </div>
  )
}

export default TalkTags;
