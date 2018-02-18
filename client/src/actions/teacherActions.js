import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const RECEIVED_TEACHERS = 'RECEIVED_TEACHERS';
export const RECEIVED_TEACHERS_FROM_MONASTERY = 'RECEIVED_TEACHERS_FROM_MONASTERY';
const ROOT_URL = process.env.REACT_APP_API_URL;

// 'ROOT_URL/monasteries/:id'
export function fetchTeachers({ url }) {
  return (dispatch) => {
    dispatch({ type: FETCH_TEACHERS });
    fetch(`${ROOT_URL}${url}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type:RECEIVED_TEACHERS_FROM_MONASTERY, payload: json.monastery })
      })
  };
}

export function fetchAllTeachers() {
  return (dispatch) => {
    dispatch({ type: FETCH_TEACHERS });
    fetch(`${ROOT_URL}/teachers`)
      .then(res => res.json())
        .then(json => dispatch({ type: RECEIVED_TEACHERS, payload: json.teachers }))
  }
}
