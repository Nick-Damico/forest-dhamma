import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
export const FETCH_MONASTERIES = 'FETCH_MONASTERIES';
export const RECEIVED_MONASTERIES = 'RECEIVED_MONASTERIES';
const ROOT_URL = process.env.REACT_APP_API_URL;

// 'ROOT_URL/monasteries'
export function fetchMonasteries() {
  return (dispatch) => {
    dispatch({type: FETCH_MONASTERIES});
    fetch(`${ROOT_URL}/monasteries`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: RECEIVED_MONASTERIES, payload: json.monasteries})
      })
  };
}
