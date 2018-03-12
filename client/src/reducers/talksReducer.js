import { FETCH_TALKS, RECEIVED_TALKS } from '../actions/talkActions';

function TalksReducer(state = {
  collection: [],
  isLoading: false
}, action) {
  switch( action.type ) {
    case FETCH_TALKS:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVED_TALKS:
      return {
        collection: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export default TalksReducer;
