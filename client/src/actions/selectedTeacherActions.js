import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();
export const FETCH_SELECTED_TEACHER = 'FETCH_TALKS';
export const RECEIVED_SELECTED_TEACHER = 'RECEIVED_TALKS';
const ROOT_URL = process.env.REACT_APP_API_URL;


export function fetchSelectedTeacher({ url }) {
  return (dispatch) => {
    dispatch({ type: FETCH_SELECTED_TEACHER });
    fetch(`${ROOT_URL}${url}`)
      .then(response => response.json())
        .then(json => dispatch({ type: RECEIVED_SELECTED_TEACHER, payload: json.teacher }))
  }
}
