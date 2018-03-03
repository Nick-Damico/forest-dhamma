import { FETCH_TEACHERS,
         RECEIVED_TEACHERS
       } from '../actions/teacherActions';

function TeachersReducer(state = {
  collection: [],
  isLoading: true,
},action) {
  switch(action.type) {
    case FETCH_TEACHERS:
      return { ...state, isLoading: true };
    case RECEIVED_TEACHERS:
      return { collection: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default TeachersReducer;
