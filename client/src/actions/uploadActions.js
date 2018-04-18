import { ADD_SELECTED_TALK } from './selectedTalkActions';
const ROOT_URL = process.env.REACT_APP_API_URL;

export function uploadTalk(data) {
  return (dispatch) => {
    fetch(`https://forest-dhamma.herokuapp.com/api/talks`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
        .then(json => dispatch({ type: ADD_SELECTED_TALK, payload: json }))
  }
}
