import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

const ROOT_URL = 'http://localhost:3001/api/v1';
export const FETCH_MONASTERIES = 'FETCH_MONASTERIES';
export const RECEIVED_MONASTERIES = 'RECEIVED_MONASTERIES';
export const FETCH_MONASTERY = 'FETCH_MONASTERY';
export const RECEIVED_MONASTERY = 'RECEIVED_MONASTERY';

// 'ROOT_URL/monasteries'
export function fetchMonasteries() {
  return (dispatch) => {
    dispatch({type: FETCH_MONASTERIES});
    fetch(`${ROOT_URL}/monasteries`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        dispatch({type: RECEIVED_MONASTERIES, payload: json.monasteries})
      })
  };
}

// 'ROOT_URL/monasteries/:id'
export function fetchMonastery({id}) {
  return (dispatch) => {
    dispatch({ type: FETCH_MONASTERY });
    fetch(`${ROOT_URL}/monasteries/${id}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        dispatch({ type:RECEIVED_MONASTERY, payload: json.monastery })
      })
  };
}

// 
