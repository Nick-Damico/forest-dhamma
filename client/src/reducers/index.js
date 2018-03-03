import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';
import SelectedTalkReducer  from './selectedTalkReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
  selectedTalk: SelectedTalkReducer,
})

export default RootReducer;
