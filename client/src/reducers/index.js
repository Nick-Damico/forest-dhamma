import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
})

export default RootReducer;
