import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { updateMonastery } from '../../actions/monasteryActions';

class MonasteryItem extends Component {

  onHandleClick = (e,monastery) => {
    const target = e.target;
    const likes = monastery.likes + 1;
    // add animation class
    target.classList.add('animate-heart');
    // dispatch action creator
    this.props.updateMonastery(monastery, likes);
    // remove animation class
    setTimeout(() => {
      target.classList.remove('animate-heart');
    }, 1300)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.monastery !== nextProps.monastery ? true : false
  }

  render() {
    const { monastery } = this.props;
    const { name, talks, likes, img_url, id } = monastery;
    return (
      <div className="monastery-container--item" style={{background: `url(${ img_url })`, backgroundSize: 'cover'}}>
        <div className="monastery-container--item-inner">
          <h3 className="monastery-contianer--item-title">{ name }</h3>
          <p>{ talks.length } Talks | { likes } Likes <button onClick={((e) => this.onHandleClick(e,monastery))} className="monastery-item__like-btn"></button></p>
          <Link to={`/monasteries/${id}`} className="monastery-item--arrow">&#9660;</Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateMonastery }, dispatch);
}

export default connect(null, mapDispatchToProps)(MonasteryItem);
