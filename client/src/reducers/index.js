import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';
import SelectedTeacherReducer from './selectedTeacherReducer';
import SelectedTalkReducer  from './selectedTalkReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
  selectedTeacher: SelectedTeacherReducer,
  selectedTalk: SelectedTalkReducer,
})

export default RootReducer;
