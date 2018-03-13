import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const ROOT_URL = process.env.REACT_APP_API_URL;
class MonasteryItem extends Component {


  state = {
    counter: 0,
  }

  onHandleClick = () => {
    this.setState({
      counter: this.state.counter += 1,
    })
  }

  callApi = () => {
    //prettier

    console.log('a')
    fetch(`${ROOT_URL}/monasteriesdsaasfdsfds`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('baddd errorrrr!!!')
        }

        console.log('b')
        return response.json()
      })
      .then(json => console.log('c', json))
      .catch(err => console.log('d', err))
      console.log('e')


      // a e b c + json

      // a e d + err
  }

  render() {
    const { monastery, onMonasteryClick, onHandleClick, counter } = this.props;

    const { name, talks } = monastery;
    return (
      <div className="monastery-container--item" style={{background: `url(${monastery.img_url})`, backgroundSize: 'cover'}}>
        <div className="monastery-container--item-inner">
          <h3 className="monastery-contianer--item-title">{ name }</h3>
          <p>{talks.length} Talks</p>
          <Link to={`/monasteries/${monastery.id}`} className="monastery-item--arrow">&#9660;</Link>
          <span>{this.state.counter}</span>
          <button onClick={this.onHandleClick}>+</button>
          <button onClick={this.callApi}>Call Api</button>
        </div>

      </div>
    )
  }
}

export default MonasteryItem;
