import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();
export const FETCH_TALKS = 'FETCH_TALKS';
export const RECEIVED_TALKS = 'RECEIVED_TALKS';
const ROOT_URL = process.env.REACT_APP_API_URL;

export function fetchTalks() {
  return (dispatch) => {
    dispatch({ type: FETCH_TALKS });
    fetch(`api/talks`)
      .then(response => response.json())
        .then(json => {
          dispatch({type: RECEIVED_TALKS, payload: json.talks})
        })
  }
}
