import {
  FETCH_SELECTED_TEACHER,
  RECEIVED_SELECTED_TEACHER 
} from '../actions/selectedTeacherActions';

function TalksReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SELECTED_TEACHER:
      return [...state];
    case RECEIVED_SELECTED_TEACHER:
        return [...state, action.payload ];
    default:
      return state;
  }
}

export default TalksReducer;
