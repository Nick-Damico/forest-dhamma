import { ADD_SELECTED_TALK, REMOVE_SELECTED_TALK }  from '../actions/selectedTalkActions';

function SelectedTalkReducer(state = null,action) {
  switch( action.type ) {
    case ADD_SELECTED_TALK:
      return action.payload;
    case REMOVE_SELECTED_TALK:
      return null;
    default:
      return state;
  }
}

export default SelectedTalkReducer;
