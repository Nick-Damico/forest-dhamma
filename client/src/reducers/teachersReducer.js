import { FETCH_TEACHERS,
         RECEIVED_TEACHERS,
         RECEIVED_TEACHERS_FROM_MONASTERY
       } from '../actions/teacherActions';

function TeachersReducer(state = {
  teachers: [],
  loading: true,
},action) {
  switch(action.type) {
    case FETCH_TEACHERS:
      return { ...state, loading: true };
    case RECEIVED_TEACHERS_FROM_MONASTERY:
      return { teachers: action.payload.teachers, monastery: action.payload.name, loading: false};
    case RECEIVED_TEACHERS:
      return { teachers: action.payload, loading: false };
    default:
      return state;
  }
}

export default TeachersReducer;
