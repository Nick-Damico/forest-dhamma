import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES
}  from '../actions/monasteryActions';

function MonasteriesReducer(state = [], action) {
  switch( action.type ) {
    case FETCH_MONASTERIES:
      return [...state];
    case RECEIVED_MONASTERIES:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default MonasteriesReducer;
