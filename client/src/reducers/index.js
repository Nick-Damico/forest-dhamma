import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';
import SelectedTeacherReducer from './selectedTeacherReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
  selectedTeacher: SelectedTeacherReducer,
})

export default RootReducer;
