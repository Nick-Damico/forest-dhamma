import { ADD_SELECTED_TALK }  from '../actions/selectedTalkActions';

function SelectedTalkReducer(state = null,action) {
  switch( action.type ) {
    case ADD_SELECTED_TALK:
      return action.payload;
    default:
      return state;
  }
}

export default SelectedTalkReducer;
