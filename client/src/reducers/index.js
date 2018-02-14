import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';
import TeachersReducer from './teachersReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
  teachers: TeachersReducer,
})

export default RootReducer;
