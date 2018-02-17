export const ADD_SELECTED_TALK = 'ADD_SELECTED_TALK';
export const REMOVE_SELECTED_TALK = 'REMOVE_SELECTED_TALK';

// 'ROOT_URL/monasteries/:id'
export function addSelectedTalk(talk) {
  return (dispatch) => {
    dispatch({ type: ADD_SELECTED_TALK, payload: talk });
  };
}

export function removeSelectedTalk() {
  return (dispatch) => {
    dispatch({ type: REMOVE_SELECTED_TALK });
  };
}
