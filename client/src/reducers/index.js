import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';
import TalksReducer from './TalksReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
  talks: TalksReducer,
})

export default RootReducer;
