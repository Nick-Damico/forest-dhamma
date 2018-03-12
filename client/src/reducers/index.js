import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';
import SelectedTalkReducer  from './selectedTalkReducer';
import TalksReducer from './talksReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
  selectedTalk: SelectedTalkReducer,
  talks: TalksReducer
})

export default RootReducer;
