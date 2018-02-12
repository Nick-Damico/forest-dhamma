import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteries_reducer';

const RootReducer = combineReducers({
  monasteries: MonasteriesReducer,
})

export default RootReducer;
