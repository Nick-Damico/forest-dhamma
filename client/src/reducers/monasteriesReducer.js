import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES
}  from '../actions/monasteryActions';

function MonasteriesReducer(state = {
  collection: [],
  isLoading: false
},
action) {
  switch( action.type ) {
    case FETCH_MONASTERIES:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVED_MONASTERIES:
      return {
        collection: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default MonasteriesReducer;
