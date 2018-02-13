import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteriesReducer';

const RootReducer = combineReducers({
  monasteryState: MonasteriesReducer,
})

export default RootReducer;
