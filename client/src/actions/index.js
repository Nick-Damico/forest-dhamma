import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

const ROOT_URL = 'http://localhost:3001/api/v1';
export const FETCH_MONASTERIES = 'FETCH_MONASTERIES';
export const FETCH_MONASTERY = 'FETCH_MONASTERY';

// 'ROOT_URL/monasteries'

export function fetchMonasteries() {
  const url = `${ROOT_URL}/monasteries`;
  const request = fetch(url)
                    .then(response => response.json())
                    .then(json => json.monasteries)
  return {
    type: FETCH_MONASTERIES,
    payload: request
  };
}

// 'ROOT_URL/monasteries/:id'
export function fetchMonastery({id}) {
  const url = `${ROOT_URL}/monasteries/${id}`;
  return {
    type: FETCH_MONASTERY,
  }
}
