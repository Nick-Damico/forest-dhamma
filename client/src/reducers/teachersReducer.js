import { FETCH_TEACHERS, RECEIVED_TEACHERS } from '../actions/teacherActions';

function TeachersReducer(state = [],action) {
  switch(action.type) {
    case FETCH_TEACHERS:
      return [];
    case RECEIVED_TEACHERS:
      return [...state, action.payload.teachers, action.payload.name];
    default:
      return state;
  }
}

export default TeachersReducer;
