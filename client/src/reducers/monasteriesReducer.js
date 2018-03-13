import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES,
  UPDATE_MONASTERY
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
    case UPDATE_MONASTERY:
      const newCollection = state.collection.map(m => m.id === action.payload.id ? action.payload : m)
      return { collection: newCollection, isLoading: false };
    default:
      return state;
  }
}

export default MonasteriesReducer;
