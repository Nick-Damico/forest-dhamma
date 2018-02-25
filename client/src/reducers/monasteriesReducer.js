import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES
}  from '../actions/monasteryActions';

function MonasteriesReducer(state = {
monasteries: [],
loading: true },
action) {
  switch( action.type ) {
    case FETCH_MONASTERIES:
      return {
        loading: true,
      };
    case RECEIVED_MONASTERIES:
      return {
        monasteries: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default MonasteriesReducer;
