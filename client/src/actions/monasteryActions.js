import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
export const FETCH_MONASTERIES = 'FETCH_MONASTERIES';
export const RECEIVED_MONASTERIES = 'RECEIVED_MONASTERIES';
export const UPDATE_MONASTERY = 'UPDATE_MONASTERY';
const ROOT_URL = process.env.REACT_APP_API_URL;

console.log(ROOT_URL);
// 'ROOT_URL/monasteries'
export function fetchMonasteries() {
  return (dispatch) => {
    dispatch({type: FETCH_MONASTERIES});
    fetch(`/monasteries`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: RECEIVED_MONASTERIES, payload: json.monasteries})
      })
  };
}

export function updateMonastery(monastery, numlikes) {
  return (dispatch) => {
    fetch(`${ROOT_URL}/monasteries/${monastery.id}?likes=${numlikes}`, {
        method: 'PATCH',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
    .catch(error => console.error(error))
    .then(response => response.json())
    .then(json => {
      dispatch({ type: UPDATE_MONASTERY, payload: json.monastery })
    })
  }
}
