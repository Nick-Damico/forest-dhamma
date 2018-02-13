import {
  RECEIVED_MONASTERIES,
  FETCH_MONASTERIES,
  FETCH_MONASTERY,
  RECEIVED_MONASTERY
}  from '../actions/index';

function MonasteriesReducer(state = {
  loading: false,
  monasteries: [],
  selectedMonastery: null
}, action) {
  switch( action.type ) {
    case FETCH_MONASTERIES:
      return Object.assign({}, state, {loading: true});
    case RECEIVED_MONASTERIES:
      return {loading: false, monasteries: action.payload}
    case FETCH_MONASTERY:
      return Object.assign({}, state, {loading: true});
      case RECEIVED_MONASTERY:
      return Object.assign({}, state, {loading: false, selectedMonastery: action.payload})
    default:
      return state;
  }
}

export default MonasteriesReducer;
