import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES
}  from '../actions/monasteryActions';

function MonasteriesReducer(state = [], action) {
  switch( action.type ) {
    case FETCH_MONASTERIES:
      return Object.assign({}, state, {loading: true});
    case RECEIVED_MONASTERIES:
      return {loading: false, monasteries: action.payload}
    default:
      return state;
  }
}

export default MonasteriesReducer;
