export const ADD_SELECTED_TALK = 'ADD_SELECTED_TALK';
export const REMOVE_SELECTED_TALK = 'REMOVE_SELECTED_TALK';
const ROOT_URL = process.env.REACT_APP_API_URL;

// 'ROOT_URL/monasteries/:id'
export function addSelectedTalk(talk) {
  return (dispatch) => {
    dispatch({ type: ADD_SELECTED_TALK, payload: talk });
  };
}

export function addTagToTalk(talk, tag) {
  return (dispatch) => {
    fetch(`https://forest-dhamma.herokuapp.com/api/talks/${talk.id}?tags_attributes[0][name]=${tag.toLowerCase()}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
      .then(json => {
        if ( json.talk ) {
            dispatch({ type: ADD_SELECTED_TALK, payload: json.talk })
        }
      });
  }
}
