import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/note';

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return state.set(action.id, {
        title: action.title,
        text: action.text
      });

    case EDIT_NOTE:
      return state.set(String(action.id), {
        title: action.title,
        text: action.text
      });

    case DELETE_NOTE:
      return state.remove(String(action.id));

    default:
      return state;
  }
};

export default notes;
