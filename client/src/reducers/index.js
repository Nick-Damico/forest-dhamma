import { combineReducers } from 'redux';
import MonasteriesReducer from './monasteries_reducer';

const RootReducer = combineReducers({
  monasteryState: MonasteriesReducer,
})

export default RootReducer;
